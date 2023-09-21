export const getProducts = async (
  limit: number = 4,
  category: "all" | string = "all"
) => {
  let url = process.env.NEXT_PUBLIC_API || "";
  if (category && category !== "all") {
    url += "/category/" + category.toLowerCase();
  }
  if (limit > 0) {
    url += "?limit=" + limit;
  }

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  let data = await res.json();

  //   update product category according to the requirement UI
  if (Array.isArray(data) && category === "all") {
    data = data.map((prod, i) => ({
      ...prod,
      category: i % 2 === 0 ? "men's clothing" : "women's clothing",
    }));
  }

  return data;
};
