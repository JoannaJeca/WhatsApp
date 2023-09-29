import styled from "styled-components"
import { FaTwitter } from "react-icons/fa";

interface iCircle{
    icon : JSX.Element
}

const GlobalCircles:React.FC<iCircle> = ({icon})=>{
    return(
        <div>
            <Circle>{icon}</Circle>
        </div>
    )
};

export default GlobalCircles;

const Circle = styled.div`
width:60px;
height:60px;
border-radius:50%;
display:flex;
justify-content:center;
align-items:center;
background-color:rgba(0,0,0,0.9);
border:1px solid #fcf5eb;
font-size:22px;
color:#fcf5eb;
transition: all ease-in 360ms;

&:hover{
    border:none;
    transform:scale(0.9);
    background-color:#23d366;
    color:#111b21;
    transition: all ease-in 360ms;
}
`