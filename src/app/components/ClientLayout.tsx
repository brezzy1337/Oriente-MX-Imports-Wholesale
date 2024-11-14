'use client'

import { usePathname } from 'next/navigation'
import Navigation from './Navigation'
import Footer from './Footer'

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
      <main className={`${!isAdminRoute ? 'pt-20' : ''}`}>{children}</main>
      {!isAdminRoute && <Footer />}
    </>
  )
}
