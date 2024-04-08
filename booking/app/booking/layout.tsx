import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Забронировать отель',
  description: 'Забронировать отель в любой точке мира',
}

export default function BookingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
    </>
     
  )
}
