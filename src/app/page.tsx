import ClientLayout from "@/components/layout/ClientLayout";
import Hero from "@/sections/Hero";
import Announcement from "@/sections/Announcement";
import dynamic from "next/dynamic";

// Lazy load de componentes no críticos (debajo del fold)
const Menu = dynamic(() => import("@/sections/Menu"), {
  loading: () => null,
});
const PainPoints = dynamic(() => import("@/sections/PainPoints"), {
  loading: () => null,
});
const Services = dynamic(() => import("@/sections/Services"), {
  loading: () => null,
});
const Features = dynamic(() => import("@/sections/Features"), {
  loading: () => null,
});
const Gallery = dynamic(() => import("@/sections/Gallery"), {
  loading: () => null,
});
const Testimonials = dynamic(() => import("@/sections/Testimonials"), {
  loading: () => null,
});
const Branches = dynamic(() => import("@/sections/Branches"), {
  loading: () => null,
});
const FAQ = dynamic(() => import("@/sections/FAQ"), {
  loading: () => null,
});

export default function Home() {
  return (
    <ClientLayout>
      <Hero />
      <Announcement />
      <Menu />
      <PainPoints />
      <Services />
      <Features />
      <Gallery />
      <Testimonials />
      <Branches />
      <FAQ />
    </ClientLayout>
  );
}
