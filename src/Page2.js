import React,{useEffect} from 'react';
import {gsap} from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";


const Page2 = () => {

    gsap.registerPlugin(ScrollTrigger);
    useEffect(()=>{
        const tl = gsap.timeline({
            scrollTrigger:{
                trigger:'.page2',
                // markers:'true',
                start:'-15%',
                end:'26%',
            scrub:true      
         } 
      })
      tl.fromTo('p.text2-p',{color:'rgba(255, 255, 255, 0.591)'},{color:'white',stagger:1,ease:'power3.out'})
      gsap.fromTo('p.text2-p',{y:0},{y:30,ease:'power3.out',scrollTrigger:{
          trigger:'.page2',
          scrub:true,
          start:'-20%',
          end:'55%'
      }})
    },[])

    return (
    <div className='page2 full'>
        <video loop autoPlay muted className='intro-vid smoke-vid' src='/images/smoke-video.mp4' ></video> 
        <div className='page2-content'>
            <div className='text2-box'>
                <p className='text2-p p1'>A dramatically more powerful camera system.</p>
                <p className='text2-p p2'>A display so responsive, every iteraction feels new again.</p>
                <p className='text2-p p3'>The world's fastest smartphone chip.</p>
                <p className='text2-p'>Exepctional durability.</p>
                <p className='text2-p'>And huge leap in battery life.</p>
                <p className='text2-p'>Let's Pro</p>
            </div>     
        </div>
               
    </div>
    );
}

export default Page2;
