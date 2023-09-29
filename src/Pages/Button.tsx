import styled from "styled-components"
import {AiOutlineArrowUp} from "react-icons/ai"

const Button = ()=>{
    return(
        <>
          <Container>
          <Holder>
            <AiOutlineArrowUp/>
          </Holder>
          </Container>
        </>
    )
};
export default Button;
const Holder = styled.div`
background-color:#23d366;
width:40px;
height:40px;
border-radius:5px;
display:flex;
justify-content:center;
align-items:center;
box-shadow:0px 2px 8px 0px #23d366;
position:fixed;
font-size:23px;
margin-right:5px;
cursor:pointer;
&:hover{
animation: Shake 0.5s linear infinite;

}
    @keyframes Shake{
        0%{
            transform: rotate(5deg);
        }
        25%{
            transform: rotate(-6deg);
        }
        50%{
            transform: rotate(5deg);
        }
        75%{
            transform: rotate(-6deg);
        }
        100%{
            transform: rotate(5deg);

        }
    }

`
const Container = styled.section`
width:100%;
display:flex;
justify-content:flex-end;`