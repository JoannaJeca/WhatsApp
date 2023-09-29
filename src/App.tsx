import react from 'react'
import {MainRouter} from "./Route/MainRouter"
import {RouterProvider}from "react-router-dom"

function App(){
  return(
    <div>
      <RouterProvider router={MainRouter}/>
    </div>
  )
};
export default App;