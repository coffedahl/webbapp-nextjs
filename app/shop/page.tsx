import ProductCard from "./(components)/ProductCard";

/**
 * Fetches the product data from the api and passes is as a array of products
 * @returns Array of Products
 */
async function getProductData() {
  // Fetch fresh data from api
  const res = await fetch(process.env.LOCAL_URL + "/api/products", {
    cache: "no-store",
  });
  // Parse and return data
  const data: Array<Product> = await res.json()
  return data
}

export default async function Shop() {
  // Get product data
  const products: Array<Product> = await getProductData()
  return (
    <div>
      <section className="flex flex-col justify-center items-center m-8">
        <h1 className="text-3xl font-semibold">Webshop</h1>
        <p className="text-lg">
          Here you can find our awsome merch and products to bring your
          partystyle to the next level!
        </p>
      </section>
      <section className="flex flex-wrap">
        {products.map((product, x) => (
          <ProductCard product={product} key={x} />
        ))}
      </section>
    </div>
  );
}
