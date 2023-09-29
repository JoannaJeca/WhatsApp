import React from 'react'
import styled from 'styled-components'
import {GiCircle} from "react-icons/gi"
import {NavLink} from "react-router-dom"
interface iStatusbox{
    Text: string
    src: string
    txt: string
}

const ViewedStatusDiv: React.FC <iStatusbox> = ({Text , src , txt}) => {
  return (
    <div>
        <Container>
           
            <All>
             <CircleDashed/>
             
             <USER>
             <Img src={src} alt='Profile Pic'/>
             </USER>
             
             <NavLink style={{textDecoration:"none"}} to="/mainStatus">
                <Name>
                  <div style={{marginTop: '20px', color: 'white'}}>
                  <span>{Text}</span>
                  </div>
                  <Day>{txt}</Day>
                </Name>
                </NavLink>
            </All>
            </Container>
           
    </div>
  )
}

export default ViewedStatusDiv
const CircleDashed = styled(GiCircle)`
position:absolute;
font-size:55px;
// top:133px;
color:darkgrey;
// bottom:65px;
right:140px;`


const Day = styled.div`
    margin-bottom: 20px;
    font-size: 13.5px;
    font-weight:400;
    color: darkgrey;
    // margin-right:20px;
`


const Img = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 360px;
    object-fit:cover;
    object-position:center;
`

const USER = styled.div`
    height: 44px;
    width: 44px;
    background-color:#1e262c;
    border-radius: 360px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #1e262c;
    cursor: pointer;
    margin-left: 3px;
`

const Name = styled.div`
  height: 30px;
  width: fit-content;
  margin-left: 15px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  color: RGB(59, 74, 84);
  padding: 0px;
  font-weight:450;
  font-size:17px;

`



const All = styled.div`
  display: flex;
  // background-color:orange;
  width:54%;
  padding:5px 0px;
  justify-content: flex-start;
  align-items: center;
  position:relative;

`

const Container = styled.div`
  height: 63px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom:5px;
  cursor:pointer;
  width: 100%;
  index:-1;
//   background-color:blue;
&:hover{
    background-color:#4E5255;
}
`