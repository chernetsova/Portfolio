import BookingPage from "@/pages/bookingPage";
import {getCountries} from "@/app/actions"
import { Suspense } from "react";
import Loading from "@/app/loading";
import { ICountry } from "@/types";

export default async function Booking() {
  const dataCountries = await getCountries();
  let countriesProp = dataCountries.map((country: ICountry<{common: string, rus: {official: string}}>) => {
    return {
      value: country.name.common,
      label: country.translations.rus.official,
      flag: country.flag,
      latlng: country.latlng
    }
  });
  
  return (
    <Suspense fallback={<Loading />}>
      <BookingPage countries={countriesProp}/>
    </Suspense>
  )
}