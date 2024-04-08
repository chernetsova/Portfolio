"use client";
import Link from 'next/link';
import global from '@/app/styles/global.module.scss';
import { Result, ConfigProvider, Button } from 'antd';
 
export default function NotFound() {
  return (
    <ConfigProvider
      theme={{ 
        components: {
        Result: {
          colorTextHeading: "#01a9c1",
          colorTextDescription: "#d9de5e"
        },
        Button: {
          defaultBorderColor: "#01a9c1",
          defaultBg: "#d9de5e",
          defaultColor: "#051f34"
        }
        }
      }}
    >
      <Result
        className={global.layout_blue_dark}
        status="404"
        title="404"
        subTitle="Такой страницы не существует"
        extra={<Link href="/"><Button type="dashed">Вернуться на главную</Button></Link>}
      />
    </ConfigProvider>
  )
  
}