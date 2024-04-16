'use client';
import { MapContainer } from 'react-leaflet';
import { useMapParams } from "@/components/BookingPage";
import map from '@/app/styles/map.module.scss';
import MapLayout from './MapLayout';
import { IMap } from "@/types"; 

export default function MapContent() {
  let { coords, zoom }: IMap = useMapParams();

  return(
    <MapContainer 
      className={map.layout}
      center={coords} 
      zoom={zoom} 
      scrollWheelZoom={true}
      attributionControl = {false}
    >
      <MapLayout />
    </MapContainer>
  )
}