import { FileX } from "lucide-react";
import { styled } from "..";
import { relative } from "path";

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
    position: 'absolute',
    right: "0px",
    top: "0px",
    backgroundColor: "$gray800",
    width: '480px,',
    height: '100%',
    zIndex: 1000,
    padding: "2rem",

  

})

export const DivSectionAmountShop = styled('div', {
    display: "flex",
    flexDirection: "column",

    div: {
        display: "flex",
        justifyContent: "space-between",
        padding: "0.5rem",
     

    },

    button: {
      
        width: "384px",
        height: "69px",
        borderRadius: "8px",
        border: "none",
        background: "$green500",
        color: "$white",
        fontSize: "18px",
        fontWeight: "bold"
    }
})

export const DivSectionCarShop = styled('div', {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: "1rem",
    padding: "1rem",
   


    div: {
        display: "flex",
        flexDirection: 'column',
        gap: "1rem",

        p: {
            fontWeight: "400",
            fontSize: "18px",
        },
        

        button: {
            background: "transparent",
            border: "none",
            color: "$green500",
            cursor: "pointer",
            width: "1rem"
            
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