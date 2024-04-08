import BreadcrumbLayout from "@/components/BreadcrumbLayout";
import HotelLayout from "@/components/HotelLayout";
import { TSlug, IParams } from "@/types";

export async function generateStaticParams() {
  const info = await fetch(`${process.env.API_HOST}/hotels/`).then((res) => res.json());

  return info.map((item: TSlug) => ({
    slug: item.slug,
  }))
}

export default function Page({ params }: IParams<{slug: string}>) {
  const { slug } = params;
  return(
    <>
      <BreadcrumbLayout slug={slug}/>
      <HotelLayout page={slug} />
    </>
  )
}