import { Carousel } from "./carousel";
import { CarouselItem } from "./carousel-item";
import { Review } from "./review";

export const Testimonials: React.FC = () => (
  <Carousel className="bg-black text-white py-10 lg:py-20">
    <CarouselItem index={0}>
      <Review by={"Adel (Showtime)"}>
        Margelo and Showtime both share the love for high-quality software and
        passion for builind something people want.
      </Review>
    </CarouselItem>
    <CarouselItem index={1}>
      <Review by={"Adel (Showtime)"}>
        Margelo and Showtime both share the love for high-quality software and
        passion for builind something people want.
      </Review>
    </CarouselItem>
    <CarouselItem index={2}>
      <Review by={"Adel (Showtime)"}>
        Margelo and Showtime both share the love for high-quality software and
        passion for builind something people want.
      </Review>
    </CarouselItem>
    <CarouselItem index={3}>
      <Review by={"Adel (Showtime)"}>
        Margelo and Showtime both share the love for high-quality software and
        passion for builind something people want.
      </Review>
    </CarouselItem>
    <CarouselItem index={4}>
      <Review by={"Adel (Showtime)"}>
        Margelo and Showtime both share the love for high-quality software and
        passion for builind something people want.
      </Review>
    </CarouselItem>
  </Carousel>
);
