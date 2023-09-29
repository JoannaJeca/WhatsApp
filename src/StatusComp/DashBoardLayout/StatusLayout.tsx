import styled from "styled-components"
import Body from "../../Static/Body"
import SideBar from "../../Static/SideBar"

const StatusLayout =()=>{
    return(
        <div id="statushome" >
            <Container>
                 <Wrapper>
                    <SideBar/>
                    <Body/>
                    </Wrapper>
            </Container>
        </div>
    )
};
export default StatusLayout;
const Wrapper = styled.div`
width:90%;
// height:90%;
display:flex;
align-items:center;
justify-content:space-between;
// background-color:blue
`

const Container = styled.div`
width:100%;
height:100%;
background-color:#0b141a;
display:flex;
justify-content:center;
align-items:center;
padding:18.5px 0px;
`