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

export const SpanShop = styled('span', {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "24px",
    height: "24px",
    backgroundColor: "$green500",
    position: "absolute",
    borderRadius: "100%",
    right: "1",

})