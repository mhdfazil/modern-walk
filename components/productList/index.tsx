import { Product } from "@/types/product.type";
import { FC } from "react";
import ProductCard from "../common/productCard";

type ProductListProps = {
  title: string;
  products: Product[];
};

const ProductList: FC<ProductListProps> = ({ title, products }) => {
  return (
    <section className="mt-4">
      <h2 className="text-2xl font-bold">{title}</h2>
      <ul
        className={"mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"}
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ul>
    </section>
  );
};

export default ProductList;
