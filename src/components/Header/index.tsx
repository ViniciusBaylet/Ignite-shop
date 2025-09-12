import Image from "next/image"
import logoImg from "../../assets/ignite-simbol.svg"
import { HeaderContainer } from "./styles"

export function Header() {
    return (
            <HeaderContainer>
                <Image src={logoImg} alt="" />
            </HeaderContainer>
    )
}