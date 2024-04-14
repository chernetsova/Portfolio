'use client';
import React from 'react';
import { useState, useEffect } from 'react';
import createCollectionsIndexedDB, { idb } from "@/pages/api/connectDB";
import { Layout, Typography, ConfigProvider, Dropdown, Badge, Flex, Button, Space, Row, Col } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Pages, FormData, ArrayType } from "@/types";
import { useUrlSegment } from '@/pages/api/urlSegment';
import global from '@/app/styles/global.module.scss';
import header from '@/app/styles/header.module.scss';

const { Header } = Layout;
const { Title, Text } = Typography;

let items: ArrayType<any> = [];

export default function HeaderLayout() {
  let { segment } = useUrlSegment();
  let [allOrders, setAllOrders] = useState([]);
  let countOrders = allOrders.length;

  const getAllDataOrder = () => {
    const dbPromise = idb.open("orders", 1);

    dbPromise.onsuccess = () => {
      const db = dbPromise.result;
      const tx = db.transaction("userOrder", "readonly");
      const userOrder = tx.objectStore("userOrder");
      const order = userOrder.getAll();

      order.onsuccess = (query: ArrayType<any>) => {
        setAllOrders(allOrders = query.srcElement.result);
        items = allOrders.map((order: FormData) => {
          return {
            label: (
              <Row gutter={[16, 0]} className={global.border_bottom_gray}>
                <Col span={12} className={global.p_20}>
                  <Text>
                   {`${order.label}`}
                 </Text>
                </Col>
                <Col span={12} className={global.p_20}>
                  <Text italic disabled>На рассмотрении</Text>
                </Col>
              </Row>
              ),
            key: order.id
          }
        })
      };

      order.onerror = (query) => {
        console.log("setAllOrders error", query)
      };

      tx.oncomplete = () => {
        db.close();
      }
    }
  };

  const dbRun = async () => {
    await createCollectionsIndexedDB();
    await getAllDataOrder();
  }

  useEffect(() => {
    dbRun();
  });


  return(
    <Layout className={global.layout_blue_dark} >
      <Header className={header.layout}>
        <Flex justify="space-between" align="center">
          <Title className={header.title}>Забронировать отель</Title>
          {
            segment === Pages.Booking ? 
               <ConfigProvider
                 theme={{ 
                   components: {
                     Dropdown: {
                      colorBgElevated: "#d9de5e",
                      colorText: "#051f34",
                     },
                     Button: {
                      defaultBg: "#d9de5e",
                      defaultHoverBg: "#d9de5e",
                      defaultColor: "#051f34",
                      defaultHoverColor: "#051f34",
                     },
                     Badge: {
                      colorBorderBg: "#d9de5e",
                      colorBgContainer: "#d9de5e",
                     }
                   },
                 }}
               >
                <Badge size="small" count={countOrders}>
                  <Dropdown 
                    menu={{items}}
                    dropdownRender={(menu) => (
                      <>{React.cloneElement(menu as React.ReactElement, {})}</>
                    )}
                  >
                    <Button>
                      <Space>
                        Лист ожидания {`${countOrders}` > `${0}` && <DownOutlined /> }
                      </Space>
                    </Button>
                  </Dropdown>
              </Badge>
            </ConfigProvider>
            : null
          } 
          </Flex>
      </Header>  
    </Layout>
  )
}