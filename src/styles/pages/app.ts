import { FileX } from "lucide-react";
import { styled } from "..";

export const Container = styled('div',{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    minHeight: '100vh',
})

export const Header = styled('header', {
    padding: '2rem 0',
    width: '100%',
    maxWidth: 1180,
    margin: '0 auto',

    display: "flex",
    justifyContent: "space-between",

    
})
export const CardShop = styled('div', {
    position: 'relative',

})

export const SectionCarShop = styled('section', {
    backgroundColor: "$gray800",
    width: '480px,',
    height: '100%',
    position: 'absolute',
    right: "0px",
    top: "0px",
  

})

export const DivSectionCarShop = styled('div', {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',


    div: {
        display: "flex",
        flexDirection: 'column',

        button: {
            background: "transparent",
            border: "none",
            color: "$green500",
            
        }
    }
  

})

export const SpanShop = styled('span', {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "24px",
    height: "24px",
    backgroundColor: "$green500",
    position: "absolute",
    borderRadius: "100%",
    right: "-10px",
    top: "-10px",
    border: "2px solid $gray900",
    fontSize: "11px",

})