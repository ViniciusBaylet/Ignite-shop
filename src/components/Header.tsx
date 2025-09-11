import logoImg from "../assets/ignite-simbol.svg"
import { Container, HeaderContainer } from "../styles/components/Header"

export function Header() {
    return (
        <Container>
            <HeaderContainer>
                <img src={logoImg.src} alt="" />
            </HeaderContainer>
        </Container>
    )
}