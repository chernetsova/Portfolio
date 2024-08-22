"use client"

import { Alert } from 'antd';
import { observer } from "mobx-react-lite";
import msg from "@/store/msg";

export default observer(function AlertComponent(props: any) {
  
  let { message, type } = props;

  const onClose = () => msg.updateShow(false);

  return (
    <Alert message={message} type={type} showIcon closable onClose={onClose} />
  )
})