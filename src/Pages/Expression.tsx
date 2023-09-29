import styled from "styled-components"


import {FaAngleRight} from "react-icons/fa"


function SpeakFreely(){
    return(
        <div id="emotions">
            <Container>
                <GlobalWrap>
                    <Left><Img src="https://scontent.whatsapp.net/v/t39.8562-34/317076792_511422874258852_7691088395873706953_n.png?ccb=1-7&_nc_sid=2fbf2a&_nc_ohc=_tQpVtAunvMAX_kM6Ku&_nc_ht=scontent.whatsapp.net&oh=01_AdR_QBbda574DLKQkZdspD9Tr3Rmw91ww3agGjnhfACDgw&oe=6512A63C" alt="woman in beach"/><Image src="https://scontent.whatsapp.net/v/t39.8562-34/311869879_1082331725759559_5382136804801289925_n.png?ccb=1-7&_nc_sid=2fbf2a&_nc_ohc=DH_QrYGVqoUAX9ajyun&_nc_ht=scontent.whatsapp.net&oh=01_AdQECbEgV34HGSwMjYdXN3_iUaUX3jMccf5ElNMfBpC6DA&oe=6513F5EF"/></Left>
                    <Right>
                    <H1>Say what you feel</H1>
                  <P>
                  Express yourself without words. Use stickers and GIFs or share everyday moments on Status. Record a voice message for a quick hello or a longer story.
                  </P>
                  <Nav>
                         <Flex>Learn more<AngleRight/></Flex>
                         <HR/>
                  </Nav>
                    </Right>
                </GlobalWrap>
            </Container>
        </div>
    )
};
export default SpeakFreely;
const AngleRight = styled(FaAngleRight)`
margin-top:5px;
margin-left:6px;`

const Image = styled.img`
position:absolute;
width:100%;
top:220px;
left:20px;`

const HR = styled.hr`
// display:none;
height:1.5px;
background-color:#23d366;
`

const Flex = styled.div`
display:flex;
// color:#fcf5eb;

align-items:center;`

const Nav = styled.nav`
font-size:17px;
margin-right:7px;
cursor:pointer;
transition: all 360ms;
&:hover{
    color:#23d366;
    transition: all 360ms;
};
width:28%;

`

const H1 = styled.h1`
font-size:60px;
margin-top:0px;
margin:0px;
// color:#fcf5eb;
font-weight:normal;
line-height:66px;
span{
    color:#23d366;
}
`
const P = styled.p`
margin-top:7px;
font-size:19px;
// color:#fcf5eb;
line-height:32px;`

const Img = styled.img`
object-fit:cover;
object-position:center;
width:100%;
height:100%;
`
const Right = styled.div`
width:40%;
// background-color:yellow;
`


const Left = styled.div`
width:35%;
// background-color:yellow;
position:relative;

`

const GlobalWrap = styled.div`
width:65%;

// background-color:white;
display:flex;
justify-content:space-around;
align-items:center;`

const Container = styled.section`
background-color:#fcf5eb;
width:100%;
padding:100px 0px;
display:Flex;
justify-content:center;
align-items:center;
`