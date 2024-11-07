'use client'

export default function Home() {                                                             
  return (                                                                                   
    <main className="flex min-h-screen flex-col items-center p-24">                          
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm   
lg:flex">                                                                                    
        <h1 className="text-4xl font-bold mb-8">Welcome to Deli Asya</h1>                    
      </div>                                                                                 
                                                                                             
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3   
lg:text-left">                                                                               
        <div className="group rounded-lg border border-transparent px-5 py-4">               
          <h2 className="mb-3 text-2xl font-semibold">                                       
            Thai Food Import                                                                 
            <span className="inline-block transition-transform group-hover:translate-x-1     
motion-reduce:transform-none">                                                               
              -&gt;                                                                          
            </span>                                                                          
          </h2>                                                                              
          <p className="m-0 max-w-[30ch] text-sm opacity-50">                                
            Premium Thai food products for wholesale distribution.                           
          </p>                                                                               
        </div>                                                                               
                                                                                             
        <div className="group rounded-lg border border-transparent px-5 py-4">               
          <h2 className="mb-3 text-2xl font-semibold">                                       
            Wholesale Distribution                                                           
            <span className="inline-block transition-transform group-hover:translate-x-1     
motion-reduce:transform-none">                                                               
              -&gt;                                                                          
            </span>                                                                          
          </h2>                                                                              
          <p className="m-0 max-w-[30ch] text-sm opacity-50">                                
            Reliable distribution services across the region.                                
          </p>                                                                               
        </div>                                                                               
                                                                                             
        <div className="group rounded-lg border border-transparent px-5 py-4">               
          <h2 className="mb-3 text-2xl font-semibold">                                       
            Quality Products                                                                 
            <span className="inline-block transition-transform group-hover:translate-x-1     
motion-reduce:transform-none">                                                               
              -&gt;                                                                          
            </span>                                                                          
          </h2>                                                                              
          <p className="m-0 max-w-[30ch] text-sm opacity-50">                                
            Authentic Thai products with guaranteed quality.                                 
          </p>                                                                               
        </div>                                                                               
      </div>                                                                                 
    </main>                                                                                  
  )                                                                                          
}      