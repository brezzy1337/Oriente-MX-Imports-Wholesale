"use client";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="container-custom py-12 md:py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-[--primary] mb-4">
            Welcome to Deli Asya
          </h1>
          <p className="text-xl text-[--text-secondary] max-w-2xl mx-auto">
            Your Premier Thai Food Wholesale Partner in Mexico
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
            <h2 className="text-2xl font-semibold text-[--primary] mb-4">
              Thai Food Import
            </h2>
            <p className="text-[--text-secondary] leading-relaxed">
              Premium Thai food products for wholesale distribution. Authentic
              flavors direct from Thailand.
            </p>
          </div>

          <div className="group rounded-lg border border-transparent px-5 py-4">
            <h2 className="mb-3 text-2xl font-semibold">
              Wholesale Distribution
              <span
                className="inline-block transition-transform group-hover:translate-x-1     
motion-reduce:transform-none"
              ></span>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              Reliable distribution services across the region.
            </p>
          </div>

          <div className="group rounded-lg border border-transparent px-5 py-4">
            <h2 className="mb-3 text-2xl font-semibold">
              Quality Products
              <span
                className="inline-block transition-transform group-hover:translate-x-1     
motion-reduce:transform-none"
              ></span>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              Authentic Thai products with guaranteed quality.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
