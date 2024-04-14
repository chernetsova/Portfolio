import BreadcrumbLayout from "@/components/BreadcrumbLayout";
import HotelLayout from "@/components/HotelLayout";
import { TSlug } from "@/types";
import { hotels } from "@/pages/api/data/hotels"

export async function generateStaticParams() {
  try {
    const info = await fetch(`${process.env.API_HOST}/hotels/`).then((res) => res.json());

    return info.map((item: TSlug) => ({
      slug: item.slug,
    }))

  } catch {
    return hotels.map((item) => {
      slug: item.page
    })
  }
}

export default function Page(
  { params, searchParams }: { params: { slug: string }, searchParams: { [key: string]: string | string[] | undefined }
}) {
  const { slug } = params;
  return(
    <>
      <BreadcrumbLayout slug={slug}/>
      <HotelLayout page={slug} />
    </>
  )
}