"use client";
import React, { useState, createContext, useContext } from 'react';
import { useDispatch } from 'react-redux';
import dynamic from 'next/dynamic';
import "leaflet/dist/leaflet.css";
import { getHotels } from "@/app/actions";
import { alertShow } from "@/redux/feature/alert-slice";
import { AppDispatch } from '@/redux/store';
import { useUrlSegment } from '@/app/api/urlSegment';
import BreadcrumbLayout from '@/components/BreadcrumbLayout';
import { Layout, Row, Col, Select, Space, Spin } from 'antd';
import global from '@/app/styles/global.module.scss';
import { IMap, IPropsCountry, IRequestCountryHotels } from "@/types";

const { Content } = Layout;
const mapParams = createContext({coords: [], hotels: [], zoom: 6});

export const useMapParams = () => {
  return useContext(mapParams);
}

const MapContent = dynamic(() => import('@/components/MapComponents/MapContent'), {
  ssr: false,
});

export default function BookingPage(props: {countries: Array<IPropsCountry>}) {
  const {countries} = props;
  let { segment } = useUrlSegment();
  const dispatch = useDispatch<AppDispatch>();
  
  let [stateMap, setStateMap] = useState<IMap>({
    coords: [51.505, -0.09],
    hotels: [],
    zoom: 6
  });

  const [loading, setLoading] = React.useState<boolean>(false);

  const handleChange = (value: string, option: any) => { 
    setLoading(true);

    let p = new Promise<IRequestCountryHotels>((resolve, reject) => {
      const result = getHotels(option.latlng.toString());
      result ? resolve(result) : reject(new Error(result));
    });

    p.then((data) => {
      setStateMap({
        coords: option.latlng,
        hotels: data.results.hotels,
        zoom: 10
      })
    })
    .catch((error) => {
      dispatch(alertShow({ isShow: true, type: "error", message: `Запрос данных обработан с ошибкой: ${error}` }));
    })
    .finally(() => {
      setLoading(false);
    })
  };

  const filterOption = (input: string, option?: { label: string; value: string }) =>
  (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

  return (
    <Layout className={global.relative}>
      <Content>
        <BreadcrumbLayout slug={segment}/>
      </Content>
      <Content className={global.layout_blue_dark}>
        <Row>
          <Col span={24}>
            <Select
              showSearch
              style={{ width: '100%' }}
              placeholder="Выберите страну"
              onChange={handleChange}
              filterOption={filterOption}
              options={countries}
              optionRender={(option) => (
                <Space>
                  <span role="img" aria-label={option.data.value}>
                    {option.data.flag}
                  </span>
                  {option.data.label}
                </Space>
              )}
            />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Spin spinning={loading}>
              <mapParams.Provider value={stateMap}>
                <MapContent />`
              </mapParams.Provider>
            </Spin>
          </Col>
        </Row>
      </Content>
    </Layout>
  )
}