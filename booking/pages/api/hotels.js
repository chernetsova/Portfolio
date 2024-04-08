import { hotels } from "@/pages/api/data/hotels"

export default function handler(req, res) {
  const {query: {name}, method} = req;
  if ( method === "GET" ) {
    if (typeof name === "undefined" || name === null || name.length < 1 ) {
      return res.status(200).json(hotels);
    } 
    let data = hotels.filter((item) => item.page === name);
    return res.status(200).json(data);
  }
  return;
}