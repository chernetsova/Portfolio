'use server'

export async function getHotels(coords: string) {
  const responce = await fetch(`https://engine.hotellook.com/api/v2/lookup.json?query=${coords}`, { cache: 'no-store' })
  return responce.json();
}

export async function getCountries() {
  const responce = await fetch("https://restcountries.com/v3.1/all?fields=flag,latlng,translations,name", { cache: 'no-store' })
  return responce.json();
}

export async function getInfoHotel(name: string | null | undefined) {
  const responce = await fetch(`${process.env.API_HOST}/hotels?name=${name}`);
  return responce.json();
}