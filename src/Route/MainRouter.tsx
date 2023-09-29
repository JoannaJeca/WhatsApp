import {createBrowserRouter} from "react-router-dom"
import Layout from "../Common/Layout"
import Homescreen from "../Common/Homescreen"
import StatusLayout from "../StatusComp/DashBoardLayout/StatusLayout";
import StatusPage from "../STATUS/StatusProps/GlobalStatusPage"
import Status2 from "../STATUS/Status2"


export const MainRouter = createBrowserRouter ([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                index:true,
                element:<Homescreen/>
            },
            
        ],
        
    },
    {
        path:"/status",
        element:<StatusLayout/>
    },
    {
        path:"/status2",
        element:<Status2/>
    },
    
]);