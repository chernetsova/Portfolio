"use client";
import Link from 'next/link';
import notFound from '@/app/styles/notFound.module.scss';
import { Result, ConfigProvider, Button, Flex } from 'antd';
 
export default function NotFound() {
  return (
    <Flex justify='center' align='center' className={notFound.layout}>
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
          status="404"
          title="404"
          subTitle="Такой страницы не существует"
          extra={<Link href="/"><Button type="dashed">Вернуться на главную</Button></Link>}
        />
      </ConfigProvider>
    </Flex>
  )
  
}