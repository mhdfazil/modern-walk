import { Category } from "@/types/category.type";
import { FC } from "react";
import CategoryCard from "../common/categoryCard";

type CategoryListProps = {
  categories: Category[];
};

const CategoryList: FC<CategoryListProps> = ({ categories }) => {
  return (
    <section className="mt-14">
      <h2 className="text-2xl font-bold">Categories</h2>
      <ul className="mt-8 grid grid-cols-2 gap-6">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </ul>
    </section>
  );
};

export default CategoryList;
