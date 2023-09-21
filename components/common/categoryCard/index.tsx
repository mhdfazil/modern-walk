import { cn } from "@/lib/utils";
import { Category } from "@/types/category.type";
import Link from "next/link";
import { FC } from "react";

type CategoryCardProps = {
  category: Category;
};

const CategoryCard: FC<CategoryCardProps> = ({ category }) => {
  const { name, code } = category;

  return (
    <Link href={code}>
      <div
        className={cn(
          "flex items-center justify-center h-44 w-full rounded-xl text-2xl font-bold text-white",
          {
            "bg-[#2BD9AF]": code === "mens-clothing",
            "bg-[#FF5E84]": code === "womens-clothing",
          }
        )}
      >
        {name}
      </div>
    </Link>
  );
};

export default CategoryCard;
