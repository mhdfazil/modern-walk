import { cn } from "@/lib/utils";
import { Product } from "@/types/product.type";
import Image from "next/image";
import { FC } from "react";

type ProductCardProps = {
  product: Product;
};

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const { title, image, price, description, category } = product;

  return (
    <li>
      <article
        className="rounded-xl flex flex-col gap-4 shadow-lg bg-white"
        itemProp="itemListElement"
        itemScope
        itemType="https://schema.org/Product"
      >
        <div className="py-4 px-6">
          <h3 className="font-semibold truncate text-center" itemProp="name">
            {title}
          </h3>
          <div className="mt-4 flex justify-center relative h-40">
            <Image
              src={image}
              alt={"image of " + product.title}
              width={120}
              height={160}
              className="object-contain"
              itemProp="image"
            />
          </div>
        </div>
        <div
          className={cn("rounded-xl bg-[#2BD9AF] py-4 px-6 text-center", {
            "bg-[#2BD9AF]": category === "men's clothing",
            "bg-[#FF5E84]": category === "women's clothing",
          })}
        >
          <div
            className="font-bold text-[#0E42FD]"
            itemProp="offers"
            itemScope
            itemType="https://schema.org/Offer"
          >
            <span itemProp="priceCurrency" content="LKR">
              Rs
            </span>
            <span itemProp="price" content={String(price)} className="pl-1">
              {price}
            </span>
          </div>
          <p className="line-clamp-3 mt-2 text-sm" itemProp="description">
            {description}
          </p>
        </div>
      </article>
    </li>
  );
};

export default ProductCard;
