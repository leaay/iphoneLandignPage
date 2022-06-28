import React,{useEffect} from 'react';
import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Page6 = () => {
    gsap.registerPlugin(ScrollTrigger)
    useEffect(()=>{

        gsap.fromTo('div.header',{y:-100},{y:0,duration:.2,ease:'power3.out',scrollTrigger:{
            trigger:'.page6',
            start:'-2%',
            end:'0',
            scrub:true
        }})

        const tl = gsap.timeline({defaults:{
            ease:'power3.out',
        },
        scrollTrigger:{
            start:'-10%',
            end:'0',
            scrub:true,
            trigger:'.page6'
        }}) 

        // tl.to('div.page6-phone',{opacity:1})
        tl.fromTo('img.page6-portrait',{opacity:0},{opacity:.6},'<')
        tl.fromTo('div.page6-phone',{opacity:0},{opacity:1})

        gsap.fromTo('p.page6-text',{y:0},{y:60,scrollTrigger:{
            trigger:'.page6',
            start:'-20%',
            end:'50%',
            scrub:true
        }})
    })

    return (
        <div className='full page6'>
            <div className='page6-wrapper'>
                <p className='page6-text'>
                    Customize <br /> 
                    your camera to <br /> 
                    <span className='text-big'>lock in your</span>
                </p>
                <div className=' page6-phone'>
                        <img className='iphone-frame' alt='' src='/images/iphone-frame.png' />
                        <video loop autoPlay muted className='iphone-vid' src='/images/iphone-camera-video.mp4' ></video>
                </div>
                <img className='page6-portrait' alt='' src='/images/portrait.jpg' />
            </div>
                
        </div>
    );
}

export default Page6;
