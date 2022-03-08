import React from 'react'

import TynkerImage8 from "./TynkerImage8.png";
import TynkerImage9 from "./TynkerImage9.png";
import Curvytop from "./Curvytop.svg"
import BottomCurcy1 from "./BottomCurcy1.svg"
import white from "./white.svg"


import "./Third.css"

function ThirdPage(){
  return(
   <>

    <div className='WholeContainer'>

      <div className='ThirdTopCurve'>
         <img src ={Curvytop} className="ThirdCurvyTop"/>
      </div>
      <div className='ThirdContainer'>
        
        <div className='ThirdUpperContainer'>
          <div className='ThirdUpperLeft'> 
          <br/>
           <br/>
          <div className="HouseImage8">
             <img src ={TynkerImage8} className="TynkerImage8"/>
          </div>
          </div>
          <div className="ThirdUpperRight">
            <br/>
            <br/>
            <div>
              <div><h3>Parents</h3> </div>
              <div><p>Coding is quickly becoming an essential skill, one that will prepare 
                <br/> your kids to succeed in an increasingly digital world.</p> </div>
              <div><p> Tynker offers a range of options to learn coding: Your children can <br/>
               learn to code with our self-paced, immersive game-like courses, <br/>
                and then advance to learning real-world Python and JavaScript.
                </p></div>
                <div><p>Select the option that’s best for your child!</p></div>
                <div className='ThirContainerButtonHolder'><button className='ThirdContainerButton'>LearnMore</button></div>
            </div>
          </div>
          </div>
          <br/>
          <br/>

          <div className='ThirdLowerContainer'>
            <div className="ThirdLowerLeft">
            <div>
              <div><h3>Educators</h3> </div>
              <div><p>Join over 100,000 schools that use Tynker to engage students with
                <br/> coding and connect with other educators who love to code!</p> </div>
              <div><p> Teaching coding with Tynker is as easy as 1-2-3. In just minutes, you can 
               <p className='Blue'> create a free account </p>,set up your virtual 
               classroom, and assign ready-made lesson plans! <br/> </p>
                </div>
                <div><p>Tynker empowers K-12 educators with free PD, standards-aligned 
                  <br/>curricula, cross-curricular STEM coding, AP Computer Science courses, 
                  <br/>and many great coding resources.
                </p></div>
                <div className='ThirContainerButtonHolder'><button className='ThirdContainerButton'>LearnMore</button></div>
            </div>
          </div>
           <div className='ThirdLowerRight'> 
          <div className="HouseImage9">
             <img src ={TynkerImage9} className="TynkerImage9"/>
          </div>
          </div> 
          </div>
            <div className='ThirdLowerCurve'>
         <img src ={BottomCurcy1} className="ThirdCurvyBottom"/>
         </div>
          
        </div>

        <div className='EmptyDiv3'>
         </div>
        
       

        
        

      </div>
     
      
   </>
  )
}

export default ThirdPage