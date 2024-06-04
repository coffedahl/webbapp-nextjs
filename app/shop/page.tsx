import { cookies } from "next/headers";
import ProductCard from "./(components)/ProductCard";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/types/supabase";

/**
 * Fetches the product data from the api and passes is as a array of products
 * @returns Array of Products
 */
async function getProductData() {
  // Load cookies and create database connection
  const cookieStore = cookies()
  const supabase = createServerComponentClient<Database>({
    cookies: () => cookieStore
  })
  // Get products from the database
  let {data, error} = await supabase
    .from('Products')
    .select('*')
    .returns<Array<Product>>()

  // Check if data exsist or return
  if(!data)
    throw error
  else
    return data;
  
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
