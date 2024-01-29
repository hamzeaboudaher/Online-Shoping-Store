import { BlogCard } from "../Login/BlogCard";
import CarouselImage from "../Login/Carousel";
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
  
     
    
 

      <div style={{ display: "flex", gap: "100px" }}>
        <BlogCard />
        <BlogCard />
        <BlogCard />
       
      </div>
      {/* <CheckIcon /> */}
    </>
  );
}
