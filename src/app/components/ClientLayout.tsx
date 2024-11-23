'use client'

import { usePathname } from 'next/navigation'
import Navigation from './Navigation'
import Footer from './Footer'
import WhatsAppButton from '../components/WhatsAppButton'

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isAdminRoute = pathname?.startsWith('/admin')

  return (
    <>
      {!isAdminRoute && <Navigation />}
      {!isAdminRoute && <WhatsAppButton phoneNumber="+529843160169" />}
      <main className={`${!isAdminRoute ? 'pt-20' : ''}`}>{children}</main>
      {!isAdminRoute && <Footer />}
    </>
  )
}