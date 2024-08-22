import type { NextApiRequest, NextApiResponse } from 'next';
import { images } from "@/pages/api/data/images";


export default function handler(req: NextApiRequest, res: NextApiResponse) {
  let { method } = req;

  if ( method === "GET" ) {

    let max = images.length;
    let out = [];
    let l = out.length;
    let arr_idx: number[] = [];

      for (let i=0; i < 3; i++) {
        let idx = Math.floor(Math.random() * max);
        let isIdx = arr_idx.includes(idx);

        if ( !isIdx ) {
          arr_idx.push(idx);
          out.push(images[idx]);
        }
      }
      
    return res.status(200).json(out);
    
  }  
}