import { BlogCard } from "../Login/BlogCard";
import CarouselImage from "../Login/Carousel";
import { PricingCard } from "../Login/PricingCard";
// import CheckIcon from "../Login/PricingCard";
import Slider from "../Slider";

export default function Home() {
  return (
    <>
      <CarouselImage />

      <div style={{ display: "flex", gap: "100px" }}>
        <PricingCard />
        <PricingCard />
        <PricingCard />
      </div>

      <Slider />

      <div style={{ display: "flex", gap: "100px" }}>
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
      {/* <CheckIcon /> */}
    </>
  );
}
