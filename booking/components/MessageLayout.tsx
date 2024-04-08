"use client";
import { useDispatch } from 'react-redux';
import { message } from 'antd';
import { useEffect } from 'react';
import { useAppSelector, AppDispatch } from '@/redux/store';
import { alertHide } from "@/redux/feature/alert-slice";

export default function MessageLayout() {
  const [messageApi, contextHolder] = message.useMessage();
  const alertParam = useAppSelector((state) => state.alertReducer.value);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if ( alertParam.isShow ) {
      messageApi.open({
        type: alertParam.type,
        content: alertParam.message,
      });
      dispatch(alertHide())
    }
  })

  return(
    <>
      {contextHolder}
    </>
  )
}