"use client"
import Image from "next/image";
import Link from 'next/link';
import { Layout, Flex } from 'antd';
import global from "@/app/styles/global.module.scss";
import button from "@/app/styles/button.module.scss";
import title from "@/public/images/title.png";

const { Content } = Layout;

export default function HomePage() {
  return (
    // <Layout className={`${global.linearGradient} ${global.containerFluid}`}>
    //   <Flex className={global.containerFluid} align={'center'}>
    //     <Content>
    //       <Flex justify={"center"}>
    //         <Image
    //           src={title}
    //           alt="Игры на внимание"
    //           priority
    //           width={800}
    //           height={430}
    //           className={global.imgResponsive}
    //         />
    //       </Flex>
    //       <Flex justify={"center"} className={`${global.mTop20} ${global.mBottom20}`}>
    //         <Link className={`${button.container} ${button.text}`} href="/game">Играть</Link>
    //       </Flex>
    //     </Content>
    //   </Flex>
    // </Layout>
    <>
      <div className={`${global.containerFluid} ${global.containerCenter} ${global.linearGradient}`}>
        <div className={global.container}>
          <div className={global.containerCenter}>
            <Image
              src={title}
              alt="Игры на внимание"
              priority
              width={800}
              height={430}
              className={global.imgResponsive}
            />
          </div>
          <div className={global.containerCenter}>
            <Link className={`${button.container} ${button.text}`} href="/game">Играть</Link>
          </div>
        </div>
      </div>
    </>
  )
}