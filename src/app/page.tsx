"use client"
import Image from "next/image";
import { HomeContainer, Product } from "../styles/pages/page";

import camiseta1 from "../assets/ignite-simbol.svg";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3, 
      spacing: 48
    }
  })

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
        <Image src={camiseta1} width={420} height={380} alt="" />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,99</span>
        </footer>
      </Product>
      
      <Product className="keen-slider__slide">
        <Image src={camiseta1} width={420} height={380} alt="" />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 89,99</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={camiseta1} width={420} height={380} alt="" />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 99,99</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={camiseta1} width={420} height={380} alt="" />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 99,99</span>
        </footer>
      </Product>
    </HomeContainer>
  );
}
