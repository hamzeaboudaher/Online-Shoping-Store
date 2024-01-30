import { Carousel, IconButton } from "@material-tailwind/react";
import { useContext } from "react";
import ShopData from "../Context-Api-Reducer/Context";
import "../App.css";

export default function CarouselImage() {
  const { data } = useContext(ShopData);
  const firstThreeItems = data.slice(0, 9);

  return (
    <>
      <div className=" mt-20 shadow-lg">
        <h1 className="text-center text-6xl ">Welcome to OnlineShop</h1>
        <p style={{ marginTop: "50px" }}>
          Du findest hier alles für Deinen stimmigen Look. Auf eine große
          Auswahl an Größen und Farben musst Du dabei nicht verzichten.
          Besonders farbenfrohe Modelle machen Lust auf Sommer. Mit den dezenten
          Oberteilen machst Du eine gute Figur in Herbst und Winter. Damit Du in
          der kalten Jahreszeit nicht frierst, kannst Du gleich die passende
          Jacke mitbestellen. Innovative Features wie ein herausknöpfbares
          Innenfutter, dicke Kapuzen oder eine extra taillierte Passform machen
          die Jacken und Mäntel zu einem absoluten Must-Have für Deinen
          Kleiderschrank.
        </p>
      </div>

      <Carousel
        style={{
          marginTop: "200px",
          border: "2 px solid grey",
        }}
        className="rounded-xl"
        // speed={6000}
        prevArrow={({ handlePrev }) => (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handlePrev}
            className="!absolute top-2/4 left-4 -translate-y-2/4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="blue"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </IconButton>
        )}
        nextArrow={({ handleNext }) => (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handleNext}
            className="!absolute top-2/4 !right-4 -translate-y-2/4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="blue"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </IconButton>
        )}
      >
        {firstThreeItems.map((item) => (
          <div
            key={item.id}
            className="w-full scroll-smooth  animate-bounce"
            speed={6000}
          >
            <img
              style={{ backgroundColor: " rgb(51 65 85)" }}
              src={item.image} // Hier wird die Bild-URL verwendet
              alt={item.title} // Alternativer Text
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </Carousel>
    </>
  );
}
