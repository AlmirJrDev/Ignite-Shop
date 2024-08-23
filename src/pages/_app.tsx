import { AppProps } from "next/app"
import { globalStyles } from "../styles/global"

import logoImg from '../assets/logo.svg';
import { Container, Header, SpanShop } from "../styles/pages/app";

import Image from "next/image";
import { ShopBagButton } from "../styles/pages/product";
import { ShoppingBag } from "lucide-react";

globalStyles();
export default function App({ Component, pageProps }: AppProps) {
  
  return (
    <Container>
      <Header>
          <Image src={logoImg} alt="" />

          <div>
            <SpanShop>1</SpanShop>
          <ShopBagButton>
          <ShoppingBag />
          </ShopBagButton>
          </div>
        
      </Header>
    <Component {...pageProps} />
    </Container>
  )
}

