import Hero from "../Pages/Hero";
import PrivateMsg from "../Pages/PrivateMsg"
import VidVoice from "../Pages/Vid&Voice";
import SpeakFreely from "../Pages/SpeakFreely"
import Connect from "../Pages/Connect"
import Expression from "../Pages/Expression"
import KeepInTouch from "../Pages/KeepInTouch"
import TransformBiz from "../Pages/TransformBiz"
import Button from "../Pages/Button"

const Homescreen = () =>{
    return(
        <div>
            <Hero/>
            <Button/>
            <PrivateMsg/> 
            <VidVoice/>
            <SpeakFreely/>
            <KeepInTouch/>
            <Expression/>
            <TransformBiz/>
            <Connect/> 

        </div>
    )
}
export default Homescreen;