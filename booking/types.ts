export type ArrayType<T> = T extends Array<infer Item> ? Item : T

interface IUser {
  lastname: string,
  firstname: string,
  city: string,
  birthday: Date
}

export enum Pages {
  Main = "main",
  Booking = "booking",
  Hotels= "hotels"
}

export interface ICountry<T> {
  name: T,
  translations: T,
  flag: string,
  latlng: Array<number>
}

export interface IParams<T> {
  slug: T,
  params: T
}

export type TSlug = Pick<IParams<string>, "slug">

export interface IMap {
  coords: ArrayType<any> ,
  zoom: number,
  hotels: ArrayType<any>,
}

export enum typeAlert {
  success, info, warning, undefined
}

export type InitialStateAlert = {
  value: AlertState
}

export type AlertState = {
  isShow: boolean,
  type: any,
  message: string | undefined
}

type UserName = Pick<IUser, "lastname" | "firstname">

export interface FormData extends UserName {
  dateOrder? : Date,
  label?: string,
  id?: number,
  key?: number
}

export interface IHotel<T> {
  name: string,
  id: number,
  location: T
}

export type TPage = string | null | undefined

export interface IInfo {
  id: number | undefined,
  page: string | undefined,
  label: string | undefined,
  content: string | undefined,
}

export interface IPropsCountry extends ICountry<any> {
  value: string,
  label: string
}

export interface IRequestCountryHotels {
  status: string,
  results: {
    hotels: ArrayType<any>,
    locations: ArrayType<any>,
  } 
}
