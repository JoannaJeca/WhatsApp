import styled from "styled-components"
import StatusDiv from "../STATUS/StatusProps/GlobalStatusDiv"
import data from "../STATUS/Status.json"
import data2 from "../STATUS/Status2.json"
import ViewedStatusDiv from "../STATUS/StatusProps/GlobalStatusViewed";
import MyStatus from "../STATUS/StatusProps/MyStatus"
import {BiSolidLockAlt} from "react-icons/bi"

const SideBar = ()=>{


    return(
        <div>
            <Container>  
              <Wrapper>
                <HeadWrap>
                <MyStatus src="https://pps.whatsapp.net/v/t61.24694-24/367513378_1045523066813658_1751989949981896674_n.jpg?ccb=11-4&oh=01_AdT5CsM9ODYfQEMZG0eKXZ7VSRFSETuCW9-LzBzq-k3K1A&oe=651FD1D6&_nc_sid=000000&_nc_cat=100" Text="My Status" txt="No updates"/>
                </HeadWrap>
        <Return>
            <HR/>
            <Day>RECENT</Day>
             {data?.map((props)=>(
                <StatusDiv
                Text={props.Text}
                src={props.src}
                txt={props.txt}/>
             ))}
        </Return>
        <HR/>
        <Day>VIEWED</Day>
        {data2?.map((props)=>(
          <ViewedStatusDiv
          Text={props.Text}
          src={props.src}
          txt={props.txt}
          />
        ))}
      
        <Foot>
          <BiSolidLockAlt/>
          Your status updates are
          <span> end-to-end encrypted</span>
        </Foot> 
       </Wrapper>
            </Container>
        </div>
    )
};
export default SideBar;

const Foot = styled.div`
width:98%;
display:flex;
justify-content:center;
align-items:center;
padding:70px 0px;
font-size:13px;
// background-color:white;
color: darkgrey;
span{
  color:skyblue;
  margin-left:3px;
}
`


const HeadWrap = styled.div`
width:99%;
// background-color:white;
overflow:hidden
`


const Return = styled.div`
// background-color:green;
margin-bottom:30px;
// margin-top:60px;
`

const HR = styled.hr`
height:0.5px;
width:99%;
border-bottom:0px;
background-color:grey;
`

const Day = styled.div<{cl?:string}>`
    margin-bottom: 20px;
    font-size: 13px;
    margin-right:7px;
    font-weight:400;
    color: darkgrey;
    margin-top:10px;
    &:hover{
      color:${({cl})=>cl};
    }
`


const Wrapper = styled.div`
width:95%;
height:100%;`


const Container = styled.div`
width:380px;
height:85vh;
background-color:#1e262c;
padding:37px 0px;
display:flex;
// flex-direction:column;
justify-content:center;
overflow-y: auto;
  &::-webkit-scrollbar{
     width: 5px;

   }

   &::-webkit-scrollbar-track{
    background-color:#1e262c;
   }

   &::-webkit-scrollbar-thumb{
    background-color: grey;
    border-radius: 5px;
   }

`