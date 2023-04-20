import ClientOnly from './components/ClientOnly'
import Modal from './components/modals/Modal'
import Navbar from './components/navbar/Navbar'
import './globals.css'
import {Nunito} from 'next/font/google'

export const metadata = {
  title: 'StayLocal',
  description: 'Optimizing travel experience',
}

const font = Nunito({
   subsets:["latin"],
})


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
            <Modal actionLabel="Submit" secondaryLabel="" title="Hello Word" isOpen/>
            <Navbar/>
         </ClientOnly>
        {children}
       </body>
    </html>
  )
}
