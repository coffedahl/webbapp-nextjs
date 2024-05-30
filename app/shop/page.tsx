import ProductCard from "./(components)/ProductCard";

export default function Shop() {
    const products: Array<Product> = []
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