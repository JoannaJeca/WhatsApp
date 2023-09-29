import styled from "styled-components"
import GlobalButton from "../Props/GlobalButton";
import {HiDownload} from "react-icons/hi"

const Hero = ()=>{
    return(
        <div>
            <Container>
                <Wrapper>
                    <GlobalWrap>
                    <Left>
                        <H1>Message privately</H1>
                        <P>Simple, reliable, private messaging and calling for free*, available all over the world.</P>
                        <GlobalButton bcc="#25d366" cl="black" icon ={<HiDownload/>} text="Download" bd="black"/>
                    </Left>
                    <Right>
                        <First><Img src="https://scontent.whatsapp.net/v/t39.8562-34/329792464_534173148815054_3736500652022655929_n.png?ccb=1-7&_nc_sid=2fbf2a&_nc_ohc=Fz0o80UeF3oAX9jtxss&_nc_ht=scontent.whatsapp.net&oh=01_AdS730jw42xNWMJdAexazfKvoK1mzGh19V3lvW3gjqN1_g&oe=651B7303" alt="chat"/>
                        <Love src="https://scontent.whatsapp.net/v/t39.8562-34/318567080_617695970110803_5923371384204745052_n.png?ccb=1-7&_nc_sid=2fbf2a&_nc_ohc=hYiOpdDylfYAX8_My20&_nc_ht=scontent.whatsapp.net&oh=01_AdQUeGTU21dJoonOpx2D7JSy6ik1vNTngwGLlLiq1vndMA&oe=651C39A6" alt=""/></First>
                        <First><Image src="https://scontent.whatsapp.net/v/t39.8562-34/325411784_1246981732900913_178427211297704021_n.png?ccb=1-7&_nc_sid=2fbf2a&_nc_ohc=1NRzfgjQP1gAX_1B3qu&_nc_ht=scontent.whatsapp.net&oh=01_AdSMapHw_d7SO2JuneTQn3-f2Nim4MI0f0kpzqZFhZiDxQ&oe=65111A75" alt="chat2"/></First>
                        <First><Imager src="https://scontent.whatsapp.net/v/t39.8562-34/327063196_5800887573364035_3294745791563659576_n.png?ccb=1-7&_nc_sid=2fbf2a&_nc_ohc=bfzVzWgWkLEAX_XfzhJ&_nc_ht=scontent.whatsapp.net&oh=01_AdRrXk-8o_DVF6bYpzhLRBMy189slCrc7MqkhYgF2gDFTA&oe=651BD3CE" alt="chat3"/></First>
                        <First><Imag src="https://scontent.whatsapp.net/v/t39.8562-34/327713084_566495871797259_1779906837439389762_n.png?ccb=1-7&_nc_sid=2fbf2a&_nc_ohc=GKDvCElXjygAX-yJBrq&_nc_oc=AQk13JX7h1oxFJFKHU7T3w7rnwTVv-ZAtKiBkw7mg6QUArfUJv-6z42GQN57qrWkj28&_nc_ht=scontent.whatsapp.net&oh=01_AdQRX1TDbEjhVZAR3ruigwS-NNRtG91QUjbNQV-Qa1g_8g&oe=651A489B" alt=""/>
                        <Touched src="https://scontent.whatsapp.net/v/t39.8562-34/331324920_411994007808830_5458286697352087382_n.png?ccb=1-7&_nc_sid=2fbf2a&_nc_ohc=4XXllSmwBbYAX-5w_ne&_nc_ht=scontent.whatsapp.net&oh=01_AdS8G_JjdpPjHvZAkJpCQNzGr1rbENHnjcb0vTgqBQgkjw&oe=651B94AA" alt=""/></First>
                        <First><Imagers src="https://scontent.whatsapp.net/v/t39.8562-34/326024354_1853616705005075_6682783808843436720_n.png?ccb=1-7&_nc_sid=2fbf2a&_nc_ohc=Aysbrjt8J20AX9FtaKY&_nc_ht=scontent.whatsapp.net&oh=01_AdQ2dCQv92gF7Cla2cDM_PM_6PL2hd0yYRYOK1i1lVK95g&oe=651197AE" alt="chat4"/></First>
                    </Right>
                    </GlobalWrap>
                </Wrapper>
            </Container>
        </div>
    )
};
export default Hero;
const Love = styled.img`
width:75%;
position:absolute;
top:25px;
left:10px;`

const Touched = styled.img`
width:75%;
position:absolute;
left:10px;
top:90%;
`

const Imagers = styled.img`
object-fit:cover;
object-position:center;
width:100%;
`
const Imag = styled.img`
object-fit:cover;
object-position:center;
width:100%;
`

const Imager = styled.img`
object-fit:cover;
object-position:center;
width:100%;
`

const Image = styled.img`
object-fit:cover;
object-position:center;
width:100%;
`

const Img = styled.img`
object-fit:cover;
object-position:center;
width:100%;
animation: 3s alternate 1 SlideIn
@keyframes SlideIn{
    0%{
        margin-bottom:100%;
        height:10%;
    }
    100%{
        margin-bottom:0%;
        height:100%;
    }
}
`

const First = styled.div`
width:100%;
// background-color:green;
margin-bottom:12px;
position:relative;`

const Right = styled.div`
width:45%;
height:70%;
// background-color:red;
`

const H1 = styled.h1`
color:white;
font-size:60px;
margin-top:0px;
margin:0px;
font-weight:normal;
`
const P = styled.p`
color:white;
margin-top:7px;
font-size:19px;
line-height:32px;`


const Left = styled.div`
width:30%;
// background-color:yellow;
`

const GlobalWrap = styled.div`
width:75%;
// background-color:black;
display:Flex;
justify-content:space-between;
align-items:center;`

const Wrapper = styled.main`
background-image:url("https://scontent.whatsapp.net/v/t39.8562-34/316546300_547692113846445_7299710494491288098_n.png?ccb=1-7&_nc_sid=2fbf2a&_nc_ohc=56iwJ951oREAX8UFaxl&_nc_ht=scontent.whatsapp.net&oh=01_AdTxYJdRo452gXIE1_Cx9X5yKfQn_LQXOlfQa4EgwSZmcg&oe=651A6B25"); 
background-repeat:no-repeat;
background-size:cover;
background-position:center;
width:95%;
border-radius:40px;
padding:100px 0px;
display:flex;
align-items:center;
justify-content:center;
margin:40px 0px;

`

const Container = styled.section`
background-color:#fcf5eb;
height:100%;
width:100%;
display:flex;
justify-content:center;
`