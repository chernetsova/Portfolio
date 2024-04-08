"use client";
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Image from 'next/image';
import Link from 'next/link';
import { getInfoHotel } from '@/app/actions';
import { alertShow } from "@/redux/feature/alert-slice";
import { AppDispatch } from '@/redux/store';
import { route } from "@/route";
import { Layout, Flex, Card, Rate, Row, Col, Button, ConfigProvider, Spin } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import global from '@/app/styles/global.module.scss';
import ambos from "@/public/images/hotels/ambos.jpg";
import lausanne from "@/public/images/hotels/lausanne.jpg";
import negresco from "@/public/images/hotels/negresco.jpg";
import { IInfo } from "@/types";

export default function HomePage() {
  const dispatch = useDispatch<AppDispatch>();
  let [info, setInfo] = useState<Array<IInfo>>([])
  let [isInfo, setIsInfo] = useState(false);
  let [loading, setLoading] = useState(true);

  let imgs: any = {
    ambos: ambos,
    lausanne: lausanne,
    negresco: negresco
  }

  let fn = () => {
    let p = new Promise<Array<IInfo>>((resolve, reject) => {
      const result = getInfoHotel("");
      result ? resolve(result) : reject(new Error(result));
    }); 

    p.then((result) => {
      setInfo(info = result);
      setIsInfo(true);
    })
    .catch((error) => {
      dispatch(alertShow({ isShow: true, type: "error", message: `Запрос данных обработан с ошибкой: ${error}` }));
    })
    .finally(() => {
      setLoading(false);
    })
  }
  
  useEffect(() => {
    if (!isInfo) {
      fn();
    } else return;
  })

 

  return(
    <Layout className={global.layout_blue_dark}>
      <Spin spinning={loading}>
      <Flex justify="center" align="center" wrap="wrap" gap="small">
          {
            isInfo &&
            info.map((hotel: IInfo) => {
              return(
                <Card 
                  key={hotel.id}
                  title={hotel.label} 
                  extra={
                    typeof hotel.page !== "undefined" && <Link href={route[hotel.page]["href"]}>Перейти</Link>}
                > 
                  <Row>
                    <Col>
                    {
                      typeof hotel.page !== "undefined" && 
                      <Image
                        src={imgs[hotel.page]}
                        width={250}
                        height={250}
                        alt={hotel.label ?? ""}
                      />
                    }
                    </Col>
                  </Row>
                  <Row align="middle" justify="center">
                    <Col>
                      <Rate value={5} disabled className={global.mt_20}></Rate>
                    </Col>
                  </Row>
                </Card>
              )
            })
          }
      </Flex>
      {
        isInfo &&
        <Flex justify="center" align="center">
          <ConfigProvider
            theme={{ 
              components: {
                Button: {
                  defaultBg: "#d9de5e",
                  defaultHoverBg: "#d9de5e",
                  defaultColor: "#051f34",
                  defaultHoverColor: "#051f34",
                },
              },
            }}
          >
            <Link href="/booking"><Button block className={global.mt_20}>Перейти к бронированию <ArrowRightOutlined /></Button></Link>
          </ConfigProvider>
        </Flex>
      }
      </Spin>
    </Layout>
  )
  
}