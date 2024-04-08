'use client';
import { Layout, Flex } from 'antd';
import global from '@/app/styles/global.module.scss';

const { Footer } = Layout;

export default function FooterLayout() {
  return (
    <Layout>
      <Footer className={`${global.layout_blue_dark} ${global.color_yellow}`}>
        <Flex justify="flex-end">
          <div>&copy;&nbsp;Чернецова Ольга</div>
        </Flex>
      </Footer>
    </Layout>
  )
}