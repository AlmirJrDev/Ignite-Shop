import { AppProps } from "next/app"
import { globalStyles } from "../styles/global"

import logoImg from '../assets/logo.svg';
import { CardShop, Container, DivSectionAmountShop, DivSectionCarShop, Header, SectionCarShop, SpanShop } from "../styles/pages/app";

import Image from "next/image";
import { ShopBagButton } from "../styles/pages/product";
import { ShoppingBag } from "lucide-react";

globalStyles();
export default function App({ Component, pageProps }: AppProps) {
  
  return (
    <Container>
      <Header>
          <Image src={logoImg} alt="" />

          <CardShop>
        
            <SpanShop>1</SpanShop>
        
            <ShopBagButton>
            <ShoppingBag />
            </ShopBagButton>
          </ CardShop>

          <SectionCarShop>
            <h4>Sacola de compras</h4>
            <DivSectionCarShop>
            <Image src={logoImg} width={101} height={93} alt="product"/>
              <div>
                <p>Camisa Beyond the limits</p>
                <strong>R$ 79,90</strong>
                <button>Remover</button>
              </div>
            </DivSectionCarShop>
            <DivSectionCarShop>
            <Image src={logoImg} width={101} height={93} alt="product"/>
              <div>
                <p>Camisa Beyond the limits</p>
                <strong>R$ 79,90</strong>
                <button>Remover</button>
              </div>
            </DivSectionCarShop>
            <DivSectionAmountShop>
              <div><p>Quantidade</p> <span>3 itens</span></div>
              <div><strong>Valor total</strong> <strong>R$ 270,00</strong></div>
              <button>Finalizar compra</button>
            </DivSectionAmountShop>
          </SectionCarShop>
      </Header>
    <Component {...pageProps} />
    </Container>
  )
}

