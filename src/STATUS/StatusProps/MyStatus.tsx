import styled from 'styled-components'

interface iStatus{
    Text:string
    src:string
    txt:string
}
export const MyStatus = ({Text, src, txt}:iStatus)=>{
    return(
        <div>
             <Header>
            
            <All>
             <USER>
             <Img src={src}alt='Profile Pic'/>
             </USER>
                <Name>
                  <div style={{marginTop: '20px', color: 'white'}}>
                  <span>{Text}</span>
                  </div>
                  <Day>{txt}</Day>
                </Name>
            </All>
        </Header>
        </div>
    )

};
export default MyStatus;

const Day = styled.div`
    margin-bottom: 20px;
    font-size: 13px;
    margin-right:7px;
    font-weight:400;
    color: darkgrey;
    margin-top:7px;
    
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
    justify-content: flex-start;
    align-items: center;
    color: #FFFFFF;
    cursor: pointer;
    margin-left: 0px;
`

const Name = styled.div`
  height: 30px;
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
  // background-color: #DFE5E7;

`

const All = styled.div`
  display: flex;
//   background-color:orange;
  width:40%;
  padding:5px 0px;
  justify-content: flex-start;
  align-items: center;
`

const Header = styled.div`
  height: 63px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width:370px;
  // background-color:blue;
  margin-bottom:20px;
  // position:sticky;
  index:1;

`