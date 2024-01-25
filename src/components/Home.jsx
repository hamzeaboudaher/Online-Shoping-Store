import { BlogCard } from "../Login/BlogCard";
import CarouselImage from "../Login/Carousel";
import Login from "../Login/Login";
import { PricingCard } from "../Login/PricingCard";
// import CheckIcon from "../Login/PricingCard";

export default function Home() {
  return (
    <>
      <CarouselImage />

      <div style={{ display: "flex", gap: "100px" }}>
        <PricingCard />
        <PricingCard />
        <PricingCard />
      </div>
      <Login />

      <div style={{ display: "flex", gap: "100px" }}>
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>

      {/* <CheckIcon /> */}
    </>
  );
}
