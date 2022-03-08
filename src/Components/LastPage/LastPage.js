import React from 'react'
import tynker_small_darktm from "./tynker_small_darktm.png"
import tutor from "./tutor.png"
import FixedImage12 from "./FixedImage12.png"


import "./Last.css"


function LastPage(){
  return(
   <>

   <div className='LastHolder'>
     <div className='LastContainer'>
       <div className='LastUpperContainer'>
         <div className='ButtomFirstLayer'>
           <div><h3>ABOUT</h3></div>
           <div>
           <p>
             Tynker is the world’s leading K-12 <br/> creative coding platform, <br/>enabling students of all ages to <br/> learn to code at home, school, and <br/>on the go. Tynker’s highly <br/>successful coding curriculum has <br/>been used by one in three U.S. K-8 <br/>schools, 100,000 schools <br/>globally, and over 60 million kids <br/>across 150 countries.
           </p>
           </div>
         </div>

        <div className='ButtomSecondLayer'>
          <div><h3>RESOURCES</h3></div>
          <div>BlOG</div>
          <div>About Us</div>
          <div>Press</div>
          <div>Mobile Apps</div>
          <div>Coding</div>
          <div>EBooks</div>
          <div>Scholarship</div>
          <div>Forum</div>
          <div>Store</div>
          <div>CS Authors</div>
        </div>

        <div className='ButtomThirdLayer'>
          <div><h3>PARENTS</h3></div>
          <div>Overview</div>
          <div>Tutoring</div>
          <div>Give a Gift</div>
          <div>Redeem</div>
          <div>Why Coding</div>
          <div>Featured</div>
          <div>Makers</div>
        </div>

        <div className='ButtomFourthLayer'>
          <div><h2>EDUCATORS</h2></div>
          <div> Overview</div>
          <div> Elementary</div>
          <div> Middle</div>
          <div> School</div>
          <div>High School</div>
          <div>AP CS</div>
          <div>COURSE</div>
        </div>

        <div className='ButtomFifthLayer'>
          <div>PARENT'S NEWSLETTER</div>
          <div><input type="text"  placeholder='Enter your Email'/></div>
          <div><button className='ButtonPageButton'>OK</button></div>

        </div>

       </div>

       <div className='LastLowerContainer'>
         <div>
           <img src ={tynker_small_darktm} className="LastLogo"/>
         </div>
         <div>
           © 2022 Neuron Fuel
         </div>
         <div>
           Terms and condition
         </div>
         <div>
           Private Policy
         </div>
         <div>
           Kids and Online Staff
         </div>
         <div>
           About Us
         </div>
         <div>
           Contatct Us
         </div>

       </div>

     </div>
     <div className='FooterHolder'>
     <div className='footPage'>
     <div>
      <img src ={tutor} className="FooterLogo"/>
     </div> 
     <div>
       LIVE CODING WITH PRIVATE TUTOR
     </div>
     <div>
       <button className='FooterButton'>SCHEDULE A FREE CLASS</button>
     </div>
   </div>
   </div>

   </div>

   

   <div className='FixedIcon'>
     <img src={FixedImage12} className="Fixed" />
   </div>

    

    


   </>
  )
}

export default LastPage