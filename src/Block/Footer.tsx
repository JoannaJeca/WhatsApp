import styled from "styled-components"
import GlobalButton from "../Props/GlobalButton";
import {HiDownload} from "react-icons/hi"
import Globalcircles from "../Props/GlobalCircles"
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

function Footer(){
    return(
        <div>
            <Container>
                <GlobalWrap>
                    <Holder>
                        <Hold>
                            <Img src="https://static.whatsapp.net/rsrc.php/v3/yJ/r/Qhrnh5evyPV.png" alt="WhatsApp_logo"/>
                            <GlobalButton cl="black" text="Download" bcc="#23d366" bd="1px solid gray" icon ={<HiDownload/>} />
                        </Hold>
                        <Hold>
                            <h4>What we do</h4>
                            <p>Features</p>
                            <p>Blog</p>
                            <p>Security</p>
                            <p>For Business</p>
                        </Hold>
                        <Hold>
                            <h4>Who we are</h4>
                            <p>About us</p>
                            <p>Careers</p>
                            <p>Brand Centers</p>
                            <p>Privacy</p>
                        </Hold>
                        <Hold>
                            <h4>Use WhatsApp</h4>
                            <p>Android</p>
                            <p>iPhone</p>
                            <p>Mac/PC</p>
                            <p>WhatsApp Web</p>
                        </Hold>
                        <Hold>
                            <h4>Need help?</h4>
                            <p>Contact Us</p>
                            <p>Help Center</p>
                            <p>Coronavirus</p>
                            <p>Security Advisories</p>
                        </Hold>
                    </Holder>
                    <HR/>
                    <Bottom> 
                        <Txthold>2023 &copy; WhatsApp LLC</Txthold>
                        <Txthold>Terms & Privacy Policy</Txthold>
                        <Wrap>
                            <Globalcircles icon={<FaTwitter/>}/>
                            <Globalcircles icon={<FaYoutube/>}/>
                            <Globalcircles icon={<FaInstagram/>}/>
                            <Globalcircles icon={<FaFacebook/>}/>
                        </Wrap>
                            <Select>
                                <Option>English</Option>
                                <Option>Spanish</Option>
                                <Option>Italiano</Option>
                                <Option>Afrikaans</Option>
                                <Option>Espanol</Option>
                                <Option>Deutch</Option>
                                <Option>Nederlands</Option>
                                <Option>Francais</Option>
                                <Option>Bahasa Indonesia</Option>
                            </Select>
                       
                    </Bottom>
                </GlobalWrap>
            </Container>

        </div>
    )
}
export default Footer;
const Option = styled.option`
// font-weight:500;
font-size:16px;
border-radius:10px;`

const Select= styled.select`
width:250px;
height:50px;
font-size:16px;
font-weight:normal;
display:flex;
padding:4px 10px;
background-color:#111b21;
justify-content:center;
align-items:center;
b{
    font-weight:normal;
    font-size:17px;
    margin-right:7px;
};
font-size:23px;
border-radius:30px;
border:2px solid #fcf5eb;
color:#fcf5eb;
margin-top:5px;
transition:all ease-in 360ms;
margin-right:45px;
`

const Wrap= styled.div`
display:flex;
width:30%;
justify-content:space-between;`

const Txthold = styled.h4`
// margin-bottom:0px;
// margin-top:0px;
width:10%;
margin-right:6px;
font-size:13px;
color:#fcf5eb;
font-weight:normal;`

const Bottom = styled.div`
width:100%;
display:flex;
justify-content:space-between;`

const Img = styled.img``
const HR = styled.hr`
height:1px;
background-color:1px solid rgba(0,0,0,0.2);
margin-bottom:25px;
border-bottom:0px;
color:1px solid rgba(0,0,0,0.2);
width:100%;`

const Hold =styled.div`
display:flex;
flex-direction:column;
justify-content:space-between;
height:220px;
// background-color:green;
color:#fcf5eb;
h4{
    margin-bottom:0px;
    margin-top:0px;
    font-size:13px;
    font-weight:normal;
};
p{
    margin-bottom:5px;
    font-size:19px;

    &:hover{
        text-decoration:underline;
        color:#fcf5eb;
        transition: all ease-in-out 360ms;
        
    }
};
cursor:pointer;
`


const Holder = styled.div`
display:flex;
width:100%;
margin-bottom:45px;
justify-content:space-between;`


const GlobalWrap = styled.div`
width:75%;
flex-direction:column;
// background-color:white;
display:flex;
justify-content:space-between;
align-items:center;`

const Container = styled.footer`
background-color:#111b21;
width:100%;
padding-top:80px;
padding-bottom:30px;
display:flex;
justify-content:center;
align-items:center;
// margin-top:30px;
`