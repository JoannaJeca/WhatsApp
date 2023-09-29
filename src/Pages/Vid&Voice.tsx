import styled from "styled-components"
import {FaAngleRight} from "react-icons/fa"
import {NavLink} from "react-router-dom"

const VidVoice = ()=>{
    return(
    <div id="video">
        <Container>
            <GlobalWrap>
              <Left>
                  <H1>Never miss a moment with voice and video calls</H1>
                  <P>From a group call to classmates to a quick call with mom, feel like you’re in the same room with voice and video calls.</P>
                     < NavLink style={{textDecoration:"none"}}to="/status">
                  <Nav>
                         <Flex>Learn more<AngleRight/></Flex>
                         <HR/>
                  </Nav>
                    </NavLink>

              </Left>
              <Right><Img src="https://scontent.whatsapp.net/v/t39.8562-34/316211879_640016534274402_8272733547019635528_n.png?ccb=1-7&_nc_sid=2fbf2a&_nc_ohc=Iwu7NeAQTjwAX9325eT&_nc_ht=scontent.whatsapp.net&oh=01_AdTu_SXICU5JHuomwlDhYWhhVwGu2hhvatLPDLvM6MuG3A&oe=6510C496" alt="end to end encrypted video of man connecting with family"/></Right>
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
width:25%;

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
width:77%;
height:100%;
`

const Right = styled.div`
width:40%;
height:70%;
// background-color:red;
display:Flex;
justify-content:center;
// align-items:center;
`


const Left = styled.div`
width:38%;
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
padding:100px 0;
display:Flex;
justify-content:center;
align-items:center;
`



