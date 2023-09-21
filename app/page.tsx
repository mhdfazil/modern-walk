import CategoryList from "@/components/categoryList";
import SaleList from "@/components/productList";
import { categories } from "@/constants/categories";
import { getProducts } from "@/dataFetch/getProducts";

export default async function Home() {
  const products = await getProducts();

  return (
    <main className="max-w-7xl p-4 mx-auto">
      <SaleList title="Flash Sale" products={products} />
      <CategoryList categories={categories} />
    </main>
  );
}
