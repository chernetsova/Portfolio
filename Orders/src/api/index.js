import axios from "axios";

export async function getOrders(args) {
  try {
    const headers = { 
      "Content-Type": "application/json",
      "Token": `${import.meta.env.VITE_API_TOKEN}`
    };

    const url = `${import.meta.env.VITE_API_HOST}/orders`;
    let data = typeof args !== 'undefined' && args !== null ? args : null;

    let response = await axios({
      method: 'get',
      url: url,
      headers: headers,
      params: data
    });

    return response;
    
  } catch(error) {
    return error;
  }
}

export async function getDetailingOrder(id) {
  try {
    const headers = { 
      "Content-Type": "application/json",
      "Token": `${import.meta.env.VITE_API_TOKEN}`
    };
    
    const url = `${import.meta.env.VITE_API_HOST}/order/${id}`;

    let response = await axios({
      method: 'get',
      url: url,
      headers: headers,
    });

    return response;

  } catch (error) {
    return error;
  }
}