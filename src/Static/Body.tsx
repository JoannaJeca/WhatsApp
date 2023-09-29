import styled from "styled-components"
import image from "../assets/Images/roundstuff.png"

import Cancel from "../assets/Images/cancel-icon-transparent-3.jpg"

const Body = ()=>{
    return(
    <div>
        <Container>
           <IconHold><img src={Cancel} alt=""/></IconHold>
           <Holder>
              <Image><Img src={image} alt=""/></Image>
              <Text>Click on a status to view their status updates</Text>
           </Holder>
        </Container>
    </div>
    )
};
export default Body;
const Text = styled.h4`
color:grey;
margin-left:16px;`

const Img = styled.img`
width:100%;
object-fit:cover;
object-position:center;`

const Image = styled.div`
width:40%;
margin-top:68px;
`

const Holder = styled.div`
display:flex;
height:60%;
flex-direction:column;
align-items:center;
justify-content:space-between;`



const IconHold = styled.div`
width:100%;
display:flex;
border:0px;
img{
    width:2%;
    margin-top:10px;
};
justify-content:flex-end;
align-items:center;
margin-top:15px;`

const Container = styled.div`
width:950px;
height:95vh;
// background-color:green;
display:flex;
flex-direction:column;
align-items:center;
`