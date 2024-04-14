'use client';
import global from '@/app/styles/global.module.scss';
import { useMapParams } from "@/components/BookingPage";
import { TileLayer, Marker, Popup, useMap, LayerGroup } from 'react-leaflet';
import { alertShow } from "@/redux/feature/alert-slice";
import { useDispatch } from 'react-redux';
import { Layout, Divider, Typography, Button, DatePicker, Form, type FormProps, Input, Flex } from 'antd';
import icon from "leaflet/dist/images/marker-icon.png";
import { Icon } from 'leaflet';
import { idb } from "@/pages/api/connectDB";
import { AppDispatch } from '@/redux/store';
import { FormData, IMap, IHotel } from "@/types";

const { Content, Footer } = Layout;
const { Title, Text } = Typography;
const { RangePicker } = DatePicker;

export default function MapLayout() {

  let { coords, hotels, zoom }: IMap = useMapParams();
  
  const dispatch = useDispatch<AppDispatch>();

  const map = useMap();
  map.setView(coords, zoom);

  const myIcon = new Icon({
    iconUrl: icon.src,
    iconSize: [15,27],
   });

  const onFinish: FormProps<FormData>["onFinish"] = (values: FormData) => {
    if (Object.keys(values).length > 0) {
      const dbPromise = idb.open("orders", 1);
        dbPromise.onsuccess = async () => {
          const db = dbPromise.result;
          const tx = db.transaction("userOrder", "readwrite");
          const userOrder = tx.objectStore("userOrder");
          const order = userOrder.add({...values, id: Date.now(), key: Date.now()});

          order.onsuccess = () => {
            tx.oncomplete = () => {
              db.close();
              map.closePopup();
              dispatch(alertShow({ isShow: true, type: "success", message: "Даные успешно сохранены" }));
            };
          }

          order.onerror = (event) => {
            console.log("order error", event);
          }
        }
    }
  };
  
  const onFinishFailed: FormProps<FormData>["onFinishFailed"] = (errorInfo) => {
    dispatch(alertShow({ isShow: true, type: "error", message: `Запрос данных обработан с ошибкой: ${errorInfo}` }));
  };

  return(
    <>
      <TileLayer
        attribution='&amp;copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LayerGroup>
      {
        hotels.map((hotel: IHotel<{lat: number, lon: number}>) => {
          return (
              <Marker key={hotel.id} position={[hotel.location.lat, hotel.location.lon]} icon={myIcon}>
                <Popup>
                  <Flex justify="center" align="center" vertical={true}>
                    <Text>Отель</Text><Title level={3}>{hotel.name}</Title>
                  </Flex>
                  <Content>
                    <Divider />
                    <Form
                      name="bookingForm"
                      labelCol={{ span: 8 }}
                      wrapperCol={{ span: 16 }}
                      style={{ maxWidth: 600 }}
                      initialValues={{ remember: true }}
                      onFinish={onFinish}
                      onFinishFailed={onFinishFailed}
                      autoComplete="off"
                    >
                    <Form.Item<FormData>
                      label="Фамилия"
                      name="lastname"
                      rules={[{ required: true, message: 'Обязательное поле для заполнения' }]}
                    >
                      <Input />
                    </Form.Item>

                    <Form.Item<FormData>
                      label="Имя"
                      name="firstname"
                      rules={[{ required: true, message: 'Обязательное поле для заполнения' }]}
                    >
                      <Input />
                    </Form.Item>

                    <Form.Item<FormData>
                      label="Дата" 
                      name="dateOrder">
                      <RangePicker />
                    </Form.Item>

                    <Form.Item<FormData> 
                      name="label" 
                      initialValue={hotel.name} 
                      className={global.no_display}
                    >
                      <Input />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                      <Button type="primary" htmlType="submit">
                        Оставить заявку
                      </Button>
                    </Form.Item>
                </Form>
                  </Content>
                  <Footer>
                    <Text>Оставьте заявку для соглавсования даты и времени бронирования номера в отеле.</Text>
                  </Footer>
                </Popup>
              </Marker>
          )
        })
      }
      </LayerGroup>
      
    </>
  )
}