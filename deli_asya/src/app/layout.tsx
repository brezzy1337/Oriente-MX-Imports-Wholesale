import type { Metadata } from 'next'                                                         
 import { Inter } from 'next/font/google'                                                     
 import './globals.css'                                                                       
 import Navigation from '../components/Navigation'                                             
                                                                                              
 const inter = Inter({ subsets: ['latin'] })                                                  
                                                                                              
 export const metadata: Metadata = {                                                          
   title: 'Deli Asya - Thai Food Wholesale',                                                  
   description: 'Thai food and goods importer, wholesaler, and distributor',                  
 }                                                                                            
                                                                                              
 export default function RootLayout({                                                         
   children,                                                                                  
 }: {                                                                                         
   children: React.ReactNode                                                                  
 }) {                                                                                         
   return (                                                                                   
     <html lang="en">                                                                         
       <body className={inter.className}>                                                     
         <Navigation />                                                                       
         {children}                                                                           
       </body>                                                                                
     </html>                                                                                  
   )                                                                                          
 }             