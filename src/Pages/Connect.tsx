import styled from "styled-components"
import {BsWhatsapp} from "react-icons/bs"
import GlobalButton from "../Props/GlobalButton"
import {FaAngleLeft} from "react-icons/fa"
import {FaAngleRight} from "react-icons/fa"
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";

const Connect = ()=>{
    return(
        <div id="connect">
          <Container>
             <Wrapper>
                
                <Heading>Connect with us
                  <Flex>
                  <Circle><FaAngleLeft/></Circle>
                  <Circle1><FaAngleRight/></Circle1>
                  </Flex>
                </Heading>
                <Slide>
                  <Card>
                    <CardWrap>
                      <Logo/>
                      <Head>Creating New Experiences for People on WhatsApp</Head>
                      <Text>Today at our global Conversations event in Mumbai we’re introducing several new features that will help speed up how to get things done with businesses in a WhatsApp chat.</Text>
                      <GlobalButton bcc="white" cl="black" bd="black" text="Read More"/>
                    </CardWrap>
                  </Card>
                  {/* <Card>
                    <CardWrap>
                      <Logo/>
                  
                      <Head></Head>
                      <Text>Today we are excited to launch WhatsApp Channels to over 150 countries and deliver a private way to receive updates that matter to you. We are welcoming thousands of organizations, sports teams, artists, and thought leaders that people can follow, right within WhatsApp.</Text>
                      <GlobalButton bcc="white" cl="black" bd="black" text="Read More"/>
                    </CardWrap>
                  </Card> */}
                  {/* <Card>
                    <CardWrap>
                      <Logo/>
                  
                      <Head>New WhatsApp app for Mac; now with group calling</Head>
                      <Text>
                      Earlier this year, we introduced a new WhatsApp app for Windows desktop, and we’re now bringing the same improved experience to Mac users.
                      </Text>
                      <GlobalButton bcc="white" cl="black" bd="black" text="Read More"/>
                    </CardWrap>
                  </Card> */}
                  {/* <Card>
                    <CardWrap>
                      <Logo/>
                
                      <Head>Introducing Instant Video Messages
</Head>
                      <Text>
                      Voice messages on WhatsApp changed the way people communicate by providing a quick and secure way to share your voice. We’re excited to build on this feature with new instant video messages. Now you can record and share short personal videos directly in the chat.
                      </Text>
                      <GlobalButton bcc="white" cl="black" bd="black" text="Read More"/>
                    </CardWrap>
                  </Card> */}
                </Slide>
                
             </Wrapper>
          </Container>
        </div>
    )
};
export default Connect;
const Flex= styled.div`
display:flex;
width:30%;`

const Circle1 = styled.div`
width:63px;
border:1px solid black;
border-radius:50%;
margin-right:10px;
height:63px;
display:flex;
transition:all ease-in 360ms;
justify-content:center;
align-items:center;
&:hover{
  background-color:black;
  color:white;
  transition:all ease-in 360ms;
  };
color:black;
font-size:22px;
  `

const Circle = styled.div`
width:60px;
border:1px solid grey;
border-radius:50%;
margin-right:10px;
height:60px;
display:flex;
justify-content:center;

align-items:center;
&:hover{
  background-color:black;
  color:white;
  transition:all ease-in 360ms;
  };
color:grey;
font-size:22px;
  `


const Text = styled.p`
color:grey;
width:90%;
font-size:17px;
margin-bottom:25px;`

const Head = styled.h1`
font-size:36px;
margin-top:0px;
margin-bottom:7px;
font-weight:560;
// width:90%;
`

const Logo = styled(BsWhatsapp)`
font-size:27px;
margin-bottom:12px;`

const CardWrap = styled.div`
width:85%;
// height:500px;
// background-color:yellow;
margin:40px 0px;
`

const Card = styled.div`
width:65%;
height:90%;
display:flex;
justify-content:center;
align-items:center;
background-color:white;
padding:5px 10px;
border-radius:30px;
`

const Slide = styled.div`
width:55%;
display:flex;
// background-color:black;
scroll-behavior:auto;
overflow-y:auto;
overflow-behavior-x: contain;
scroll-snap-type: x mandatory;
scrollbar-width:none;

&::webkit-scrollbar {
    display:flex;
};
&::-webkit-scrollbar-track{
  background-color:red;
}
`

const Heading = styled.h1`
// background-color:blue;
width:45%;
height:490px;
display:flex;
font-size:46px;
font-weight:500;
align-items:center;
flex-direction:column;
justify-content:space-between;`


const Wrapper = styled.div`
width:100%;
background-image:linear-gradient(to bottom, #23d355, white);
border-bottom-left-radius:50px;
border-bottom-right-radius:50px;
padding:100px 0px;
display:flex;
justify-content:flex-end;
align-items:center;
// margin-bottom:40px;
overflow:hidden;
scroll-behavior:auto;
overflow-y:auto;
overflow-behavior-x: contain;
scroll-snap-type: x mandatory;
scrollbar-width:none;

&::-webkit-scrollbar {
    display:flex;
};
&::-webkit-scrollbar-track{
  background-color:red;
}

`

const Container = styled.section`
width:100%;
background-color:#111b21;
`