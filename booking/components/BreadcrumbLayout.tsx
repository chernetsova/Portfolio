"use client";
import { Breadcrumb, ConfigProvider, Layout } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import { route } from "@/route";
import breadcrumb from '@/app/styles/breadcrumb.module.scss';
import { usePathContext } from '@/app/api/path';
import { TSlug } from "@/types";

export default function BreadcrumbLayout(props: TSlug) {
  const { arrPaths } = usePathContext();
  const {slug} = props;
  let slugTransform = typeof slug === 'undefined' || slug === null || `${slug}`.length < 1 ? "main" : slug;

  let itemsBreadcrumb = arrPaths.map((item: string) => {
    let segment = item.length < 1 ? "main" : item;
    if (route.hasOwnProperty(segment)) {
      let title = segment !== "main" ? route[segment]["title"] : <HomeOutlined />;
      let href = segment !== "main" ? route[segment]["href"] : route["main"]["href"];

      if ( slugTransform === segment ) {
        return {
          title: title
        }
      } else {
        return {
          title: title,
          href: href
        }
      }
    } else return
    })

  return(
    <Layout className={breadcrumb.layout} >
      <ConfigProvider
          theme={{ 
            components: {
              Breadcrumb: {
                linkColor: "#01a9c1",
                separatorColor: "#01a9c1",
                lastItemColor: "#728b9f",
              },
            },
          }}
        >
        
        <Breadcrumb
          items={itemsBreadcrumb}
        />
      </ConfigProvider>
    </Layout>
  )
}