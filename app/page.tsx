import Image from "next/image";

export default function Home() {
  return (
    <section className="h-full flex items-center justify-center">
      <Image alt="jdtek infront of crowd" width={1920} height={600} src={'/jdtek-banner.png'} />
    </section>
  );
}
