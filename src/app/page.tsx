import Image from "next/image";
import { HomeContainer, Product } from "../styles/pages/page";

import camiseta1 from "../assets/ignite-simbol.svg"

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={camiseta1} width={420} height={380} alt="" />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,99</span>
        </footer>
      </Product>
      
      <Product>
        <Image src={camiseta1} width={420} height={380} alt="" />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,99</span>
        </footer>
      </Product>
    </HomeContainer>
  );
}
