'use client'

import { useSelector } from "react-redux";



export default function HtmlProvider( {
    children,
  }: {
    children: React.ReactNode;
  }) {

    const theme=useSelector((state:any)=>state.theme.theme)
  return (
    <html lang="en" data-theme={theme}>
          {children}
    </html>
  )
}
