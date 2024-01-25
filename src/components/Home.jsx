import CarouselImage from "../Login/Carousel";
import Login from "../Login/Login";
import { PricingCard } from "../Login/PricingCard";
// import CheckIcon from "../Login/PricingCard";

export default function Home() {
  return (
    <>
      <CarouselImage />
      <Login />

      <PricingCard />
      {/* <CheckIcon /> */}
    </>
  );
}
