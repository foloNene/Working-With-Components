import React from 'react'

import TynkerImage10 from './TynkerImage10.png';
import Forth1 from './Forth1.png';
import Forth2 from "./Forth2.png";
import Forth3 from "./Forth3.png";
import TynkerImage11 from './TynkerImage11.png';

import "./Forth.css"


function ForthPage(){
  return(
   <>

    <div className=' forthHolder'>
      <div className='ForthWhole'>
      
         <div className='ForthContainerTop'>
             <h2>3 Highly-Rated Mobile Apps for Learning Code</h2>
             <p>Download Tynker apps and learn to code on the go.</p>
             <button className='ForthUpperButton'>LEARN MORE</button>
          </div>

          <div className='ForthContainerUpper'>
            <div className='ForthContainerUpperLeft'>
              <div>
              <img src={TynkerImage10 } className='FothContainerImage'/>
              </div>
            </div>

            <div className='ForthContainerUpperRight'>
              <div className='ForthContainerUpperLayer1'>
                <div>
                  <img src={Forth1} className='Forth1Logo' />
                </div>
                <div>
                <div><h2>Tynker Junior</h2></div>
                  <div>
                <p>Tap-Tap picture coding with voice-overs. Pre- <br/>
                readers solve story-based puzzles and build their <br/>
                first programs in coding sandboxes. Ages 5-7 </p>
                </div>
              </div>
              </div>

               <div className='ForthContainerUpperLayer2'>
                <div>
                  <img src={Forth2} className='Forth2Logo' />
                </div>
                <div>
                <h2>Tynker</h2>
                <p>Drag-and-drop block coding with a full-featured <br/>
               workshop. Build games and apps, compose music <br/>
               and art, control smart devices, and much, much <br/>
               more. Ages 6-11 </p>
               </div>
              </div>

              <div className='ForthContainerUpperLayer3'>
                <div>
                  <img src={Forth3} className='Forth3Logo' />
                </div>
                <div>
                <h2>Mod CReator</h2>
                <p>Drag-and-drop Minecraft modding. Design skins,<br/>
               blocks and items. Modify mob behaviors. Create <br/>
               mods and add ons. Explore worlds! Ages 6-11
               </p>
                </div>
              </div>
            </div>

          </div>

          <div className='ForthContainerLow'>
             <h2>A Mini-Computer for the Internet of Things!</h2>
          </div>

          <div className='ForthContainerLowerPart'>
            <div className='ForthContainerLeft'>
              <div className='FirstParagraph'>
                <p>
                  The BBC Doctor Who HiFive Inventor is a visually <br/>
                  stunning IoT-enabled hand-shaped mini-computer <br/>
                   designed to teach kids how to control robots or <br/>
                    interface with IoT systems to investigate the world 
                    <br/>around them.
                </p>

              </div>
              <div className='SecondParagraph'>
                <p>
                  Younger students will begin their learning journey with <br/>
                   visual block coding and advanced students with
                    <br/> Micropython.
                </p>

              </div>
              <div className='ThirdParagraph'>
                <p>
                  The HiFive Inventor was developed by Tynker in  <br/>
                  collaboration with BBC Learning and SiFive, a fabless <br/>
                   RISC-V semiconductor company.
                </p>
              </div>
              <div className='ForthParagraph'>
               <p>Learn More:</p>
                <p className='blue'>www.HiFiveInventor.com</p>

              </div>

            </div>

            <div className='ForthContainerRight'>
              <div>
               <img src={TynkerImage11} className='ForthContainerImage2' />
              </div>

            </div>

          </div>


    </div>

    </div>
   
   
   
   
   </>

    
  )
}

export default ForthPage