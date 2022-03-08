import React from 'react'

import mapblue from "./mapblue.png";
import bgshape from "./bgshape.svg";
import dots from "./dots.svg";
import dots1 from "./dots1.svg";
import dots2 from "./dots2.svg";
import Student from "./Student.png"
import Parent from "./Parent.png"
import Teacher from "./Teacher.png"


import Awardcommon from "./Awardcommon.png"
import Awardaasl from "./Awardaasl.png"
import Awardmoms from "./Awardmoms.png"
import Awardnational from "./Awardnational.png"
import Awardparent from "./Awardparent.png"
import Awardparents from "./Awardparents.png"
import Awardsmart from "./Awardsmart.png"
import Awarddigital from "./Awarddigital.png"

import "./Sixth.css"



function SixthPage(){
  return(
   <>
           <div className='SixthContainer'> 
          <div className='MapContainer'>
        <div className='GlobalCommunity'>

          <br/>
            <br/>
        <div>
          <h2>Join Tynker's Global Community</h2>
          <div><button className='GlobalButton'>SIGN UP FREE</button></div>
        </div>
        </div>

        <div className='MapContainer'>
         <div className='MapHouse'>
        <div><img src ={mapblue} className="Mapblue"/></div>
        </div>
        
        <div className='FirstDotContainer'>
        <div><img src ={dots} className="Dots"/></div>
        </div>

        <div className='SecondDotContainer'>
          <div><img src ={dots1} className="Dots1"/></div>
         </div>



                <div className='FifthContainerTestimonia'>
         < div className='FirstTestomoniaBox'>
           <p>
              "I thought a game was going  <br/>to be extremely hard to <br/> make, but Tynker made it <br/> really easy.
           </p>
           <div className='ForStudent'>
             <div><p>Tynker Featured Maker</p></div>
             <div><img src={Student} className='TestimonialStudent' />
             </div>
           </div>
         </div>

         <div className='SecondTestomoniaBox'>
           <p>
              "There's so much opportunity <br/> once they understand how <br/>coding works. It's amazing to <br/>see them create incredible 
              <br/>things themselves.
           </p>
           <div className='ForParent'>
             <div><p>Charlotte R.
               <br/> Parent| Melbourne,
               <br/> Australia
             </p>
             </div>
             <div>
             <img src={Parent} className='TestimonialParent' />
           </div>
           </div>
         </div>

         <div className='ThirdTestomoniaBox'>
           <p>
              "Tynker has made  <br/> programming fun, exciting, <br/> and simple and will help lead <br/>kids into their future. <br/>
           </p>
           <div className='ForTeacher'>
             <div>
             <p>Valerie S.
               <br/> 5th Grade Teacher| 
               <br/> Australia, US
             </p>
             </div>
             <div>
             <img src={Teacher} className='TestimonialTeacher' />
           </div>
           </div>
         </div>

        </div>

        <div className='BlueCurve'>
        <div><img src ={bgshape} className="BlueImage"/></div>
        </div>


          <div className='ThirdDotContainer'>
        <div><img src ={dots2} className="Dots2"/></div>
        </div>


        </div>

        <div>

        </div>

        <div className='SixthIconHolder'>
          <div>
            <div><img src ={Awardcommon} className="IconSixth"/></div>
          </div>
          <div>
            <div><img src ={Awardaasl} className="IconSixth"/></div>
          </div>
           <div>
            <div><img src ={Awardsmart} className="IconSixth"/></div>
          </div>
           <div>
            <div><img src ={Awardparent} className="IconSixth"/></div>
          </div>
          <div>
            <div><img src ={Awarddigital} className="IconSixth"/></div>
          </div>
           <div>
            <div><img src ={Awardnational} className="IconSixth"/></div>
          </div>
           <div>
            <div><img src ={Awardmoms} className="IconSixth"/></div>
          </div>
           <div>
            <div><img src ={Awardparents} className="IconSixth"/></div>
          </div>
          
        </div>

      </div>

       </div>
   
   
   </>
    
  )
}

export default SixthPage