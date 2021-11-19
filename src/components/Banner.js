import React from "react"
import "./Banner.css"


// import background1 from '../bg/1.png'
// let bannerData ={
//     title: "Ugly Duckling",
    
// }

function Banner(){
    return(
        <div className="banner-bg" >
            {/* <img src={background1}/> */}
            <div className="container">
                <div className="banner-con">
                    <div className="banner-text">
                        <h1>Ugly<b/> Duckling</h1>
                        {/* <a href="#" className="banner-btn">learn more</a> */}
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Banner