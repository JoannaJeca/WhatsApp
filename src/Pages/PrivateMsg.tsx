import styled from "styled-components"

const PrivateMsg = ()=>{
    return(
        <div id="privacy">
            <Container>
                <Top>
                    <Img src="https://scontent.whatsapp.net/v/t39.8562-34/315574582_669241857978207_6336028129238262344_n.png?ccb=1-7&_nc_sid=2fbf2a&_nc_ohc=W4f-gI0QGawAX-LOI8f&_nc_oc=AQmniw9w3prSqfiyLtEIJ-_hVdoCa9NlUUh8_j7nb08VCKS9FK96-q0lH9FrgktBNhU&_nc_ht=scontent.whatsapp.net&oh=01_AdQYrJruV5pkVrY4HPq78j0Lo8rnM3kq1xoI9cozR-U66A&oe=65112F4C" alt="bubbles of text saying hello in different languages"/>
                </Top>
                <Middle>
                    <H1>
                    With private messaging and calling, you can be yourself, speak freely and feel close to the most important people in your life no matter where they are.
                    </H1>
                </Middle>
                <Top><Image src="https://scontent.whatsapp.net/v/t39.8562-34/315632381_5616928641708856_9210500231334849736_n.png?ccb=1-7&_nc_sid=2fbf2a&_nc_ohc=nNRc7APo48oAX8cHIih&_nc_ht=scontent.whatsapp.net&oh=01_AdT1pCyFCz8jqwJ38KiXpZy1iXOkuVCYmO60bhfh-IniPw&oe=6511EE0D" alt="bubbles of text saying hello in different languages"/></Top>
            </Container>
        </div>
    )
};
export default PrivateMsg;
const Image = styled.img`
object-fit:cover;
object-position:center;
width:100%;`

const Img = styled.img`
object-fit:cover;
object-position:center;
width:100%;`

const H1 = styled.h1`
text-align:center;
font-size:47px;
width:100%;
font-weight:600;
line-height:48.5px;
`
const Middle = styled.div`
width:65%;`

const Top = styled.div`
width:90%;`

const Container = styled.section`
width:100%;
background-color:#fcf5eb;
display:flex;
flex-direction:column;
align-items:center;`