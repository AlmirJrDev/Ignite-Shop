
import { ImagemContainer, ProductContainer, ProductDetails } from "../../styles/pages/product"
import { GetStaticProps } from "next"
import { stripe } from "../../lib/stripe"
import Stripe from "stripe"
import Image from "next/image"

interface ProductProps {
    products: {
        id: string;
        name: string;
        imageUrl: string;
        price: string;
        description: string;
      }
}

export default function Product({ products }: ProductProps) {
   

    return (
        <ProductContainer>
            <ImagemContainer>
                <Image src={products.imageUrl} width={520} height={480} alt="product"/>
            </ImagemContainer>
            <ProductDetails>
                <h1>{products.name}</h1>
                <span>{products.price}</span>

                <p>{products.description}</p>

                <button>Comprar Agora</button>
            </ProductDetails>

        </ProductContainer>

    )
}

export const getStaticProps: GetStaticProps<any, {id: string}> = async ({ params }) => {
    const productId = params.id;
    const product = await stripe.products.retrieve(productId, {
        expand: ['default_price'],
    });

    

    const price = product.default_price as Stripe.Price
    return 
  }
    
    return {
        props: {
            product: {
                id: product.id,
                name: product.name,
                imageUrl: product.images[0],
                price: new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(price.unit_amount / 100),
                description: product.description,
              }
        },
        revalidate: 60 * 60 * 1,    
    },
}