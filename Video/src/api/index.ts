import { IApiItem, IDataApi } from "../interfaces";

const approximateCalc = (num: number): number => {
  let expression = Math.floor(num/1000);
  return expression;
}

//Получение данных с сервера
export const getData = async() => {

const request = await fetch(`http://www.mocky.io/v2/5e60c5f53300005fcc97bbdd`, {
  method: "POST",
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
}); 

return await request.json();

};

//Получение совпадения timestamp из json данных с timestamp видео
export const getDataForRectangle = (params: IDataApi<IApiItem>) => {
  if (typeof params.data !== 'undefined') {
    let data = params.data.filter((item) => approximateCalc(item.timestamp) === approximateCalc(params.pointTimestamp));
    
    return data;
  }
}