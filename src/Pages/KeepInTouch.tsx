import styled from "styled-components"
import {FaAngleRight} from "react-icons/fa"

const VidVoice = ()=>{
    return(
    <div id="groups">
        <Container>
            <GlobalWrap>
              <Left>
                  <H1>Keep in touch with your groups</H1>
                  <P>Whether it's planning an outing with friends or simply staying on top of your family chats, group conversations should feel effortless.</P>
                  <Nav>
                         <Flex>Learn more<AngleRight/></Flex>
                         <HR/>
                  </Nav>
              </Left>
              <Right><Img src="https://scontent.whatsapp.net/v/t39.8562-34/318716844_644367477472796_6799212725643495984_n.png?ccb=1-7&_nc_sid=2fbf2a&_nc_ohc=WNuwtBz6Kr0AX9A2EsN&_nc_ht=scontent.whatsapp.net&oh=01_AdTDVGVpOpxxlPiIKx8x82mmhffK-3KoA2Gb4pqZa3FVvg&oe=65110CE5" alt="end to end encrypted video of man connecting with family"/><Image src="https://scontent.whatsapp.net/v/t39.8562-34/318759416_815630979518701_2490140615586319278_n.png?ccb=1-7&_nc_sid=2fbf2a&_nc_ohc=mvakl5uCZ9YAX83v-Ac&_nc_ht=scontent.whatsapp.net&oh=01_AdTjEwg7KWIQc_VAq9k2A0EMLdoiFPA2BOeShovhHWC7iA&oe=6511F88D" alt="group of people outing"/></Right>
            </GlobalWrap>
        </Container>
    </div>
    )
};
export default VidVoice;
const AngleRight = styled(FaAngleRight)`
margin-top:5px;
margin-left:6px;`

const HR = styled.hr`
// display:none;
height:1.5px;
background-color:#23d366;
`

const Flex = styled.div`
display:flex;
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
width:24%;

`

const H1 = styled.h1`
font-size:60px;
margin-top:0px;
margin:0px;
font-weight:normal;
line-height:66px;
`
const P = styled.p`
margin-top:7px;
font-size:19px;
line-height:32px;`

const Image = styled.img`
object-fit:contain;
object-position:center;
width:82%;
// height:100%;
position:absolute;
left:0px;
top:100px;
// background-color:blue;

`

const Img = styled.img`
object-fit:cover;
object-position:center;
width:74%;
// margin-left:12px;
// height:100%;
// background-color:grey;


`

const Right = styled.div`
width:40%;
height:70%;
// background-color:red;
display:Flex;
position:relative;

justify-content:center;
// align-items:flex-start;
`


const Left = styled.div`
width:42%;
// background-color:yellow;
`

const GlobalWrap = styled.div`
width:75%;
// background-color:black;
display:Flex;
justify-content:space-between;
align-items:center;`

const Container = styled.section`
width:100%;
background-color:#fcf5eb;
padding:120px 0;
display:Flex;
justify-content:center;
align-items:center;
`



