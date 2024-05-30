import Image from "next/image"

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white text-black flex flex-col w-[20%] p-8 rounded-2xl ml-[4%] mt-8">
      <Image
        src={product.imgPath}
        alt="Product picture"
        width={200}
        height={200}
      />
      <div>
        <h1 className="font-semibold text-lg">{product.name}</h1>
        <p>{product.description}</p>
        <h1 className="font-bold text-xl">{product.price},-</h1>
      </div>
      <div className="flex flex-col">
        <a href={"/shop/" + product.id}>
          <button className="bg-slate-400 mt-3 rounded-lg p-1">Se more</button>
        </a>
        <button className="bg-lime-700 mt-3 rounded-lg p-1">Add to cart</button>
      </div>
    </div>
  );
}