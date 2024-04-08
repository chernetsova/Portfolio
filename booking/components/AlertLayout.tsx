"use client";
import { Alert } from 'antd';
import alert from '@/app/styles/alert.module.scss';
import global from '@/app/styles/global.module.scss';
import { useAppSelector } from '@/redux/store';

export default function AlertLayout() {
  const alertParam = useAppSelector((state) => state.alertReducer.value);

  return(
    <>
    {
        alertParam.isShow && 
          <Alert 
            className={`${alert.layout} ${global.w_300}`} 
            type={alertParam.type} 
            message={alertParam.message} 
            showIcon 
          /> 
      }
      </>
  )
}