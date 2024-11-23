'use client'

import { useState, useEffect } from "react";
import Image from "next/image";
import DecoratedHeader from "./DecoratedHeader"
import { getBrands } from "../functions/_serverActions"

const FeaturedBrands = () => {

    const [brands, setBrands] = useState<any[]>([]);


    const fetchBrands = async () => {
        const result = await getBrands();
        if (result.success && result.data) {
            // setIsLoading(false);
            setBrands(result.data);
        }
        return result.data;
    };

    useEffect(() => {
        fetchBrands();
    }, []);

    return (
        <div className="container mx-auto px-4">
            <DecoratedHeader>
                Nuestras Marcas
            </DecoratedHeader>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {brands.map((brand) => (
                    <a href={`/comercio/brands/${brand.slug}`} key={brand.id} className="group">
                        <div className="bg-white p-4 hover:shadow-md transition-shadow">
                            <Image
                                src={brand.logoUrl}
                                alt={brand.name}
                                width={200}
                                height={200}
                                className="w-full h-auto"
                            />
                        </div>
                    </a>
                ))}
            </div>
        </div>
    )
};

export default FeaturedBrands;
