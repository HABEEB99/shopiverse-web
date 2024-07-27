import { Hero, Newsletter, Sale, Testimonials } from "@/components";

export default function Home() {
  return (
    <main className="wrapper">
      <Hero />
      <Sale />
      <Testimonials />
      <Newsletter />
    </main>
  );
}
