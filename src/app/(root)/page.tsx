import {
  Hero,
  Newsletter,
  Sale,
  Testimonials,
  TopProducts,
} from "@/components";

export default function Home() {
  return (
    <main className="wrapper">
      <Hero />
      <Sale />
      <TopProducts />
      <Testimonials />
      <Newsletter />
    </main>
  );
}
