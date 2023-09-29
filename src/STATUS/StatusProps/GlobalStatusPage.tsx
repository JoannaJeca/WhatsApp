import styled from "styled-components"
import {BiLeftArrowAlt} from "react-icons/bi"
import Cancel from "../../assets/Images/cancel-icon-transparent-3.jpg"
import {FaAngleLeft} from "react-icons/fa"
import {FaAngleRight} from "react-icons/fa"
import {useState, useEffect} from "react"
import BgPic from "../../assets/Images/chocolate_crossed.jpg"
import {BsEmojiLaughing} from "react-icons/bs"
import {PiStickerDuotone} from "react-icons/pi"
import {IoMdSend} from "react-icons/io"
import pix1 from "../../assets/Images/meme1.jpeg"
import pix2 from "../../assets/Images/bPlaces.jpeg"
import pix3 from "../../assets/Images/broke.jpeg"
import MyStatus from "../StatusProps/MyStatus"
import {HiMiniPause} from "react-icons/hi2"
import {NavLink} from "react-router-dom"
import pix4 from "../../assets/Images/WhatsApp Image 2023-09-28 at 12.01.12 AM.jpeg"

interface iData{
    img?:string
    
}

const StatusPage = ()=>{
    const [state, setState] = useState<number>(0)
    const [count, setCount]= useState<number>(0)
    const [data, setData] = useState<Array<iData>>([
        {img:pix1},
        {img:pix2},
        {img:pix3},
        {img:pix4}
        
        
    ])
    const Forward = ()=>{
        setState((prevCount:number)=>state +1)
    }

    const Backward =()=>{

            setState((el:number)=>{
            if(state >0){
                return el - 1
            }else{
                return (el= state)
            }
                
            })
        
    }

    useEffect(()=>{
        setInterval(()=>{
            setCount((el:any)=>{
                return el + 1
            })
        }, 5000)
    },[])

    return(
    <div id="
    mainStatus">
     <Container>
        <Side>
            <Icon>
            <BiLeftArrowAlt/>
            </Icon>
            <Circle onClick ={Backward}><FaAngleLeft/></Circle>

            </Side>
        <Center src= {data[count % data.length].img}/>
            <Text>
            <Header>
            
            <All>
             <USER>
             <Img src="https://pps.whatsapp.net/v/t61.24694-24/347447041_558558913092117_5249590662353313147_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdQTEFzl_bLb16tGRjSOojmrn3ECrrrh6np48IAOVMzgTQ&oe=65219F7A&_nc_sid=000000&_nc_cat=107" alt='Profile Pic'/>
             </USER>
                <Name>
                  <div style={{marginTop: '20px', color: 'white'}}>
                  <span>Big Bro Nelson</span>
                  </div>
                  <Day>today at 8:25AM</Day>
                </Name>
            </All>
        </Header>

            </Text>
            <Chat>
                <Icons><BsEmojiLaughing/><PiStickerDuotone/></Icons>
                <Input type="text" placeholder="Type a reply"/>
                <Send><IoMdSend/></Send>
            </Chat>
        <Side>
            <NavLink to="/statushome">
        <IconHold>
            <img src={Cancel} alt=""/>
            </IconHold>
            </NavLink>
            <Circle1 onClick={Forward}><FaAngleRight/></Circle1> 
        </Side>
     </Container>
    </div>
    )
}
export default StatusPage;
const Day = styled.div`
    margin-bottom: 20px;
    font-size: 13px;
    margin-right:7px;
    font-weight:400;
    color: darkgrey;
    margin-top:7px;
    width:120px;
    
`


const Img = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 360px;
    object-fit:cover;
    object-position:center;
`

const USER = styled.div`
    height: 40px;
    width: 40px;
    // background-color: #DFE5E7;
    border-radius: 360px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFFFFF;
    cursor: pointer;
    // margin-right: 10px;
`

const Name = styled.div`
  height: 30px;
  width:120px;
  width: fit-content;
  margin-left: 17px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: RGB(59, 74, 84);
  padding: 0px;
  font-weight:450;
  font-size:17px;
  background-color: #DFE5E7;

`

const All = styled.div`
  display: flex;
//   background-color:orange;
  width:40%;
  padding:5px 0px;
  justify-content: center;
  align-items: center;
`

const Header = styled.div`
  height: 63px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width:370px;
  background-color:blue;
  margin-bottom:20px;
  // position:sticky;
 

`

const Send = styled.div`
color:white;
font-size:19px;
width:6%;
font-size:24px;
display:flex;
justify-content:flex-end;
align-items:center;
margin-left:15px;
`
const Input = styled.input`
flex:1;
background-color:rgba(0,0,0,0.4);
height:99%;
border:none;
border-radius:17px;
&::placeholder{
    color:darkgrey;
    font-size:16px;
    margin-left:5px;
}
`

const Icons = styled.div`
display:flex;
justify-content:space-between;
color:white;
width:9%;
font-size:24px;
align-items:center;
margin-right:17px;
`

const Chat = styled.div`
width:49%;
// background-color:red;
height:44px;
border-radius:17px;
position:absolute;
bottom:64px;
display:flex;
justify-content:space-between;
`

const Text = styled.div`
width:40%;
height:95px;
background-color:red;
color:white;
display:flex;
justify-content:space-around;
align-items:center;
position:absolute;
top:60px;

`

const Center = styled.img`
width:42%;
margin-top:12px;
height:98vh;
background-color:black;
// position:relative;
object-fit:contain;
object-position:center;
`


const Circle1 = styled.div`
width:55px;
height:55px;
border-radius:50%;
align-self:self-end;
background-color:rgba(0,0,0,0.8);
display:flex;
justify-content:center;
align-items:center;
color:white;
margin-right:14px;
cursor:pointer;`

const Circle = styled.div`
width:55px;
cursor:pointer;
height:55px;
border-radius:50%;
background-color:rgba(0,0,0,0.8);
display:flex;
justify-content:center;
align-items:center;
color:white;
margin-left:14px;`

const Icon = styled.div`
width:100%;
display:flex;
justify-content:flex-start;
align-items:center;
// background-color:green;
font-size:28px;
margin-left:14px;
color:white;
justify-content:flex-start;
margin-top:12px;`

const IconHold = styled.div`
width:96%;
display:flex;
// margin-right:20px;
img{
    width:4.5%;
    margin-right:12px;


};
justify-content:flex-end;
align-items:center;
// background-color:green;
margin-top:13px;`


const Side = styled.div`
background-color:transparent;
height:50vh;
width:29%;
display:flex;
flex-direction:column;
justify-content:space-between;
` 

const Container = styled.section`
width:100%;
height:100vh;
display:flex;
justify-content:center;
background-color:rgba(0,0,0,0.8);
// background-image:url(${BgPic});
background-size:center;
background-position:contain;
background-repeat:repeat 2;
backdrop-filter:blur(9px);
`