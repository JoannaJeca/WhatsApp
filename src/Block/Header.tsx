import styled from "styled-components"
import {BsWhatsapp} from "react-icons/bs"
import {HiDownload} from "react-icons/hi"
import GlobalButton from "../Props/GlobalButton"
import {useState} from 'react'
import GlobalFeatures from "../Props/GlobalFeatures"
import {GiPadlock} from "react-icons/gi"
import { IoEarth } from "react-icons/io5";
import {BsPeopleFill} from "react-icons/bs"
import {PiNotepadFill} from "react-icons/pi"
import {BsEmojiSmileFill} from "react-icons/bs"
import {Link} from "react-scroll"

const Header = ()=>{
    const [header, setHeader] = useState(false)

    const changeHeader = ()=>{
        const scroller = window.pageYOffset
        if(scroller >= 70){
            setHeader(true)
        }else{
            setHeader(false)
        }
    }
    window.addEventListener("scroll", changeHeader)

    const [show, setShow] = useState(false)
    const Toggle = ()=>{
        setShow(!show)
    }

    return(
        <div>
           {header? (
             <Container border="1px solid black" po="fixed">
             <Wrapper>
                 <Logo>
                     <BsWhatsapp/>
                     <h1>WhatsApp</h1>
                 </Logo>
                 <NavHold>
                     <Nav to="" smooth={true}>
                         <Flex onMouseEnter={Toggle} onMouseLeave={Toggle}>Features<Dot/></Flex>
                         <HR/>
                     </Nav>
                     <Nav to ="privacy" smooth={true}>Privacy<HR/></Nav>
                     <Nav to="video" smooth={true}>VidCalls<HR/></Nav>
                     <Nav to="expression" smooth={true}>Expression<HR/></Nav>
                     <Nav to="groups" smooth={true}>Groups<HR/></Nav>
                     <Nav to="emotions" smooth={true}>Emotions<HR/></Nav>
                     <Nav to="transform" smooth={true}>Business<HR/></Nav>
                     <Nav to="connect" smooth={true}>Connection<HR/></Nav>


                 </NavHold>
                 <Btn>
                      <Nav to="" mg="30px">Whatsapp Web</Nav>
                      <GlobalButton bcc="#25d366" cl="black" icon ={<HiDownload/>} text="Download" bd="black"/>
                 </Btn>
             </Wrapper>
         </Container>
           ) : (
            <Container border="none"  po="">
            <Wrapper>
                <Logo>
                    <BsWhatsapp/>
                    <h1>WhatsApp</h1>
                </Logo>
                <NavHold>
                    <Nav to="">
                        <Flex  onMouseEnter={Toggle} onMouseLeave={Toggle}>Features<Dot/></Flex>
                        <HR/>
                    </Nav>
                    <Nav to="privacy" smooth={true}>Privacy<HR/></Nav>
                    <Nav to="video" smooth={true}>VidCalls<HR/></Nav>
                    <Nav to="expression" smooth={true}>Expression<HR/></Nav>
                    <Nav to="groups" smooth={true}>Groups<HR/></Nav>
                    <Nav to="emotions" smooth={true}>Emotions<HR/></Nav>
                    <Nav to="transform" smooth={true}>Business<HR/></Nav>
                    <Nav to="connect" smooth={true}>Connection<HR/></Nav>

                </NavHold>
                <Btn>
                     <Nav to="" smooth={true} mg="30px">Whatsapp Web</Nav>
                     <GlobalButton bcc="#25d366" cl="black" icon ={<HiDownload/>} text="Download" bd="black"/>
                </Btn>
            </Wrapper>
            {show? (
                <Dropdown>
                    <Wrap>
                    <GlobalFeatures hText="Message privately" pText="End-to-end encryption and privacy controls" icon={<GiPadlock/>}/>
                    
                    <GlobalFeatures hText="Stay connected" pText="Message and call for free* around the world" icon={<IoEarth/>}/>

                    <GlobalFeatures hText="Communities" pText="Group talks and chats made simple and easy" icon={<BsPeopleFill/>}/>

                    <GlobalFeatures hText="Express yourself" pText="Say it with stickers, GIFs, personalized avatars" icon={<BsEmojiSmileFill/>}/>

                    <GlobalFeatures hText="WhatsApp Biz" pText="Reach your buyers from anywhere!!!" icon={<PiNotepadFill/>}/>
                    </Wrap>
                </Dropdown>
            ) : null}
        </Container>
           ) }
        </div>
    )
};
export default Header;
const Wrap = styled.div`
width:90%;
display:flex;
justify-content:space-between;
`

const Dropdown = styled.div`
width:100%;
height:300px;
background-color:white;
display:flex;
justify-content:center;
align-items:center;
position:absolute;
top:100px;
`

const Btn = styled.div`
height:100%;
display:flex;
align-items:center;
`

const HR = styled.hr`
display:none;
height:1.5px;
background-color:#23d366;
// animation: 2s alternate infinite SlideIn;
// @keyframes SlideIn {
//     0%{
//         margin-right:100%;
//         width:10%;
//     }
//     100%{
//         margin-left:0%;
//         width:100%
//     }
// };

`

const Dot = styled.div`
width:6.5px;
height:7px;
margin-top:4px;
margin-left:2px;
border-radius:50%;
background-color:black;`

const Flex = styled.div`
display:flex;
align-items:center;`

const Nav = styled(Link)<{mg?:string}>`
font-size:17px;
margin-right:${({mg})=>mg};
cursor:pointer;
text-decoration:none;
color:black;

`

const NavHold = styled.div`
display:flex;
width:50%;
align-items:center;
height:100%;
justify-content:space-between;
// background-color:red;
// margin-top:19px;

`

const Logo = styled.div`
display:flex;
align-items:center;
color:#25d366;
font-size:36px;
margin-left:50px;
height:100%;
// background-color:black;
h1{
    font-size:24px;
    margin-left:5px;
}
`

const Wrapper = styled.div`
width:95%;
// background-color:white;
display:flex;
align-items:center;
justify-content:space-between;
`

const Container= styled.header<{border:string,  po:string}>`
width:100%;
height:70px;
position:relative;
backDrop-filter:blur(20px);
background-color:#fcf5eb;
display:flex;
color:rgba(0,0,0,0.9);
z-index:1;
position:${({po})=>po};
border-bottom:${({border})=>border}
justify-content:center;
// animation: 2s alternate 1 SlideIn;
// @keyframes SlideIn {
//     0%{
//         margin-top:100%;
//         width:10%;
//     }
//     100%{
//         margin-top:0%;
//         width:100%
//     }
// };
`