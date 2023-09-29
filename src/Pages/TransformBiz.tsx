import styled from "styled-components"
import {FaAngleRight} from "react-icons/fa"

const VidVoice = ()=>{
    return(
    <div id="transform">
        <Container>
            <GlobalWrap>
              <Left>
                  <H1>Transform your business</H1>
                  <P>WhatsApp Business helps you reach your customers globally to deliver compelling experiences at scale. Showcase your products and services, increase sales, and build relationships all with WhatsApp..</P>
                  <Nav>
                         <Flex>Learn more<AngleRight/></Flex>
                       <HR/>
                  </Nav>
              </Left>
              <Right><Img src="https://scontent.whatsapp.net/v/t39.8562-34/326872929_909424480090030_4716886741380084776_n.png?ccb=1-7&_nc_sid=2fbf2a&_nc_ohc=IFXeW08Byi8AX8kWvG8&_nc_ht=scontent.whatsapp.net&oh=01_AdQdbIfiIHeTiM3pM0yRhU0FSqdJO7vR4rn3j1LqCcNMWA&oe=6515AF77" alt="a phone showing a business market"/></Right>
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



const Img = styled.img`
object-fit:cover;
object-position:center;
width:72%;
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
width:40%;
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



