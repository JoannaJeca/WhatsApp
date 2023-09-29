import styled from "styled-components"
import {BsArrowRightShort} from "react-icons/bs"

interface iFeatures{
    icon: JSX.Element
    hText:string
    pText:string
}

const GlobalFeatures:React.FC<iFeatures>= ({icon, hText, pText})=>{

    return(
        <div>
            <Container>
               <Circle>{icon}</Circle>
               <H1>{hText}</H1>
               <P>{pText}</P>
               <Arrow><BsArrowRightShort/></Arrow>
            </Container>
        </div>
    )
};
export default GlobalFeatures;
const Arrow = styled.div`
font-size:25px;
color:black;`
const P = styled.p`
font-size:19px;
color:black;
margin-top:0px;
`

const H1 = styled.h1`
font-weight:normal;
color:black;

`

const Circle = styled.div`
width:42px;
height:42px;
border-radius:50%;
display:flex;
font-size:26px;
justify-content:center;
background-color:#23d366;
align-items:center;`

const Container= styled.section`
width:240px;
margin-left:20px;
// border-bottom:0px;
// height:210px;
padding:13px;
border-radius:16px;
border:1px solid grey;
color:white;
&:hover{
    background-color:#23d366;
    color:black;
};
display:flex;
justify-content:center;
flex-direction:column;
// align-items:center;


`