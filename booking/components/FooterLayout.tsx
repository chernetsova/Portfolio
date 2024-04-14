'use client';
import { Layout, Flex } from 'antd';
import footer from '@/app/styles/footer.module.scss';

const { Footer } = Layout;

export default function FooterLayout() {
  return (
    <Layout>
      <Footer className={`${footer.layout}`}>
        <Flex justify="flex-end">
          <div>&copy;&nbsp;Чернецова Ольга</div>
        </Flex>
      </Footer>
    </Layout>
  )
}