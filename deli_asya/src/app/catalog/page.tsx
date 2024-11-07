export default function Catalog() {                                                          
    return (                                                                                   
      <div className="container mx-auto px-4 py-8">                                            
        <h1 className="text-3xl font-bold mb-8">Product Catalog</h1>                           
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">                 
          {/* Product cards will be mapped here */}                                            
          <div className="border rounded-lg p-4">                                              
            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-20 
  xl:aspect-w-7 xl:aspect-h-8">                                                                
              {/* Product image will go here */}                                               
            </div>                                                                             
            <h2 className="mt-4 text-lg font-medium text-gray-900">Sample Product</h2>         
            <p className="mt-1 text-sm text-gray-500">Product description</p>                  
            <p className="mt-1 text-lg font-medium text-gray-900">$XX.XX</p>                   
          </div>                                                                               
        </div>                                                                                 
      </div>                                                                                   
    )                                                                                          
  }                       