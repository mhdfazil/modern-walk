import ProductList from "@/components/productList";
import { categories } from "@/constants/categories";
import { getProducts } from "@/dataFetch/getProducts";
import { notFound } from "next/navigation";

const CategoryPage = async ({ params }: { params: { category: string } }) => {
  const selectedCategory = categories.find(
    (cat) => cat.code === params.category
  );
  if (!selectedCategory) notFound();

  const products = await getProducts(0, selectedCategory.name);

  return (
    <main className="max-w-7xl p-4 mx-auto">
      <ProductList title={selectedCategory.name} products={products} />
    </main>
  );
};

export default CategoryPage;
