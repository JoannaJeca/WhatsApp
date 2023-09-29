import styled from "styled-components"

interface iButton{
    cl:string
    bcc:string
    text:string
    bd:string
    icon?: JSX.Element
}

const GlobalButton:React.FC<iButton> = ({cl, bcc, text,icon,  bd})=>{
    return(
        <div>
            <Container bcc={bcc} cl={cl} bd={bd}>
                <b>{text}</b>
                {icon}
            </Container>
        </div>
    )
};
export default GlobalButton;
const Container = styled.div<{bcc:string, cl:string, bd?:string}>`
width:155px;
height:50px;
display:flex;
justify-content:center;
align-items:center;
b{
    font-weight:normal;
    font-size:17px;
    margin-right:7px;
};
font-size:23px;
border-radius:30px;
border:1px solid ${({bd})=>bd};
background-color:${({bcc})=>bcc};
color:${({cl})=>cl};
margin-top:5px;
transition:all ease-in 360ms;
// animation:2s alternate infinite SlideIn;
&:hover{
    background-color:black;
    color:white;
    transition:all ease-in 360ms;
    @keyframes SlideIn{
        0%{
            margin-top:100%;
            width:10%;
        }
        100%{
            margin-top:0%;
            width:100%
        }
    }
}
`