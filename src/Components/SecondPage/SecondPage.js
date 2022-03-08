import React from 'react'

import TynkerImage1 from "./TynkerImage1.png"
import TynkerImage5 from "./TynkerImage5.png"
import TynkerImage6 from "./TynkerImage6.svg"
import TynkerImage7 from "./TynkerImage7.jpeg"

import "./Second.css"


function SecondPage(){
 return(
  <>

  <div className="Secondwhole">
      <div className='SecondContainer'>
        <div className='SecondUpperPart'>
          <div className='SecondUpperLeft'>
            <div><h2>The #1 Coding Platform for kids</h2></div>
            <div>
              <div>
              <p>Tynker power the creativity of over 60milions <br/>
              kids and sserves thousands of schools and educator worldwide.</p></div>
             <div><p>Our interactive stroy based learning allows kids<br/> to learn the basis with easy before seamlessly <br/>transitioning to real-world text-based languages <br/> like javaScript and python.</p></div>
             <div><p>With 70+ award-wining courses, there's a <br/> learning path for every kids, no matter their age<br/>or level. we have over 5000 learning modules,<br/>
             backed by hundreds of buit in tutorials and <br/>
             hands-on projects.</p></div>
             <div><button className='SecondButton'>START CODING NOW</button></div>
          </div>
              
            </div>
          <div className='SecondUpperRight'>
            <img src={TynkerImage1} className="SecondImage"/>
          </div>

          <br/>
        
        </div>
        <div className='SecondLower'>
          <div className='SecondLowerHeading'><h2>Tynker has been busy. Good Busy. check Out what's NEW</h2></div>
          <br/>
          <br/>
       

          <div className='SecondLowerLogoHouse'>
             <div className='SecondLowerLogos'>
               <div className='HouseImage5'>
                 <div>
              <img src={TynkerImage5} className="Image5" />
              </div>
               <div> <h3>AP Computer Science</h3>   
              <p>2 New AP® CS courses endorsed by <br/>
              the College Board.</p>
              <p className='blue'>Learn more</p>
              </div>
               </div>
            
            <div className='HouseImage6'>
                 <div>
              <img src={TynkerImage6} className="Image6" />
              </div>
               <div> <h3>Live classes</h3>   
              <p> Learning Code with a <br/>
              Teacher</p>
              <p className='blue'>Learn more</p>
              </div>
               </div>

            <div className='HouseImage7'>
                 <div>
              <img src={TynkerImage7} className="Image7" />
              </div>
               <div> <h3>Tynker + BYJU’S</h3>   
              <p>Tynker has joined the BYJU’S family <br/>
              of brands.</p>
              <p className='blue'>Learn more</p>
              </div>
               </div>

          </div>

          </div>
         
        </div>

      </div>

    </div>
  
  </>

 )
}
export default SecondPage