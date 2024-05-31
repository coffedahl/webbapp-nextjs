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
        <h1 className="font-semibold text-xl">{product.name}</h1>
        <p>{product.description}</p>
        <h1 className="font-bold text-3xl">{product.price},-</h1>
      </div>
      <div className="flex flex-col">
        <a href={"/shop/" + product.id} className="w-full">
          <button className="bg-slate-400 mt-3 font-semibold rounded-lg p-1 w-full">Se more</button>
        </a>
        <button className="bg-lime-700 text-white font-semibold mt-3 rounded-lg p-1">Add to cart</button>
      </div>
    </div>
  );
}