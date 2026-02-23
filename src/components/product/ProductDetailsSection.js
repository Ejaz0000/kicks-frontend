import React from "react";

import ProductActions from "./ProductActions";
import ProductGallery from "./ProductGallery";
import ProductInfo from "./ProductInfo";
import Container from "../layout/Container";

export default function ProductDetailsSection({ product }) {
  return (
    <section className="pt-2 pb-6 md:pb-32 px-4 sm:px-6 lg:px-8">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 md:gap-4 items-start">
          <div className="lg:col-span-2">
            <ProductGallery images={product.images} />
          </div>  
          
          <div className="lg:col-span-1 flex flex-col lg:max-w-[500px]">
            <ProductInfo product={product} />
            <div className="mt-4 md:mt-8">
              <ProductActions product={product} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
