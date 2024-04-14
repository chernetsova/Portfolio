"use client";
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Image from 'next/image';
import Link from 'next/link';
import { Layout, Card, Space, Flex, Spin} from 'antd';
import global from '@/app/styles/global.module.scss';
import hotel from '@/app/styles/hotel.module.scss';
import { getInfoHotel } from '@/app/actions';
import { alertShow } from "@/redux/feature/alert-slice";
import { AppDispatch } from '@/redux/store';
import ambos from "@/public/images/hotels/ambos.jpg";
import lausanne from "@/public/images/hotels/lausanne.jpg";
import negresco from "@/public/images/hotels/negresco.jpg";
import { TPage, IInfo } from "@/types";

export default function HotelLayout(props: {page: TPage}) {
  const {page} = props;
  const dispatch = useDispatch<AppDispatch>();
  let imgs: any = {
    ambos: ambos,
    lausanne: lausanne,
    negresco: negresco
  }
  let [info, setInfo] = useState<IInfo>({id: undefined, page: undefined, label: undefined, content: undefined})
  let [isInfo, setIsInfo] = useState(false);
  let [loading, setLoading] = useState(true);

  let fn = () => {
    let p = new Promise<Array<IInfo>>((resolve, reject) => {
      const result = getInfoHotel(page);
      result ? resolve(result) : reject(new Error(result));
    });

    p.then((result) => {
      setInfo(Object.assign(result[0]));
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

  return (
    <Layout className={`${global.layout_blue_dark}`}>
      <Spin spinning={loading}>
      <Flex justify="center" align="center">
        
          {
            isInfo &&
            <Card 
              className={hotel.card}
              title={info.label} 
              extra={<Link href={`/booking`}>Забронировать</Link>}
              cover={
                typeof info.page !== "undefined" && <Image
                src={imgs[info.page]}
                height={300}
                alt={info.page}
              />
              }
            >
              <Space>
                {info.content}
              </Space>
            </Card>
          }
        
      </Flex>
      </Spin>
    </Layout>
  )
}