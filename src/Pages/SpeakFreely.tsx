import styled from 'styled-components'
import {FaAngleRight} from "react-icons/fa"


function SpeakFreely(){
    return(
        <div id="expression">
            <Container>
                <GlobalWrap>
                    <Left><Img src="https://scontent.whatsapp.net/v/t39.8562-34/316036583_870096634427722_4468595013887544943_n.png?ccb=1-7&_nc_sid=2fbf2a&_nc_ohc=s45-uimbzXEAX_jNkDt&_nc_ht=scontent.whatsapp.net&oh=01_AdQZJj2fV6xNEZWH4y5jxbyii33TwZ1o1Nj-z7lfUOjdug&oe=65104BF1" alt=""/></Left>
                    <Right>
                    <H1>Speak<br></br> <span>freely</span></H1>
                  <P>
With end-to-end encryption, your personal messages and calls are secured. Only you and the person you're talking to can read or listen to them, and nobody in between, not even WhatsApp.</P>
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

const HR = styled.hr`
// display:none;
height:1.5px;
background-color:#23d366;
`

const Flex = styled.div`
display:flex;
color:#fcf5eb;

align-items:center;`

const Nav = styled.nav`
font-size:17px;
margin-right:7px;
cursor:pointer;
transition: all 360ms;
&:hover{
    color:#23d366;
    transition: all ease-in 360ms;
};
width:23%;

`

const H1 = styled.h1`
font-size:60px;
margin-top:0px;
margin:0px;
color:#fcf5eb;
font-weight:normal;
line-height:66px;
span{
    color:#23d366;
}
`
const P = styled.p`
margin-top:7px;
font-size:19px;
color:#fcf5eb;
line-height:32px;`

const Img = styled.img`
object-fit:cover;
object-position:center;
width:100%;
height:100%;
`
const Right = styled.div`
width:42%;
// background-color:yellow;
`


const Left = styled.div`
width:45%;
// background-color:yellow;
`

const GlobalWrap = styled.div`
width:75%;

// background-color:white;
display:flex;
justify-content:space-between;
align-items:center;`

const Container = styled.section`
background-color:#111b21;
width:100%;
padding:100px 0px;
display:Flex;
justify-content:center;
align-items:center;
`