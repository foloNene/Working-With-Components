import React from 'react'

import  tynker from "./tynker.png"
import TynkerBackground from "./TynkerBackground.png"
import TynkrHeroWinter from "./TynkrHeroWinter.png"
import swoosh from "./swoosh.svg"

import "./Head.css"


function Header(){
 return(
  <>
  <div className="Whole">
    <div className='TopContainer'> 
    <div className='TopHolder'>
      <div><img src={tynker} className="Logo"/> </div>
      <div className='NavHolder'>
      <div className='Nav'>
        <p>PLAY</p>
        <p>PARENT</p>
        <p>EDUCATOR</p>
        <p>WHY CODE</p>
      </div>
      </div>

      <div className='LeftNav'>
        <div>
        <button>JOIN FOR FREE</button>
      </div>
      <div>
       <p>
         LOG IN
      </p>
      </div>
      </div>
    </div>
    <div className='HeroHolder'>
      <div className='HeroContainer'>
        
        <div className='Left'>
          <h1>Coding Made Easy</h1>
          <p>The fun way to learn programming and develop problem- <br/>solving & critical thinking skills! Ages 5-18</p>

          <div className='HeadButton'><button className='HeadButton'>GEt Started For FRee</button>
          </div>
          <br/>
        <div>At-home Plans from $7.50 per month
        </div>
        </div>

        <div className="right">
          <div>
            <img src ={TynkrHeroWinter} className="HeroImage"/>
          </div>
        </div>
        

      </div>
       

    </div>
    <div className='LowerCurveContainer'>
       <div><img src ={swoosh} className="HeaderLowerCurve"/></div>
      </div>
     
      
     <div className='EmptyDiv'> 

  </div>
    
    </div>
    


 
    
  </div>



  </>

 )
}

export default Header