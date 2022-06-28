import React,{useEffect} from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";


const Page5 = () => {
    gsap.registerPlugin(ScrollTrigger)
    useEffect(()=>{

        gsap.fromTo('div.scroll-info',{y:-20},{y:20,repeat:-1,ease:'power2.out',duration:2,yoyo:true})

        const tl = gsap.timeline({
                defaults:{ease:'power3.out'},
                scrollTrigger:{
                    trigger:'.page5',
                    start:'0%',
                    end:'100%',
                    scrub:true,
                    pin:true
                }
            })
            tl.set('div.page6-phone , img.page6-portrait',{opacity:0})
            tl.fromTo('div.header',{y:0},{y:-100})
            tl.fromTo('div.scroll-info',{opacity:1},{opacity:0})
            tl.fromTo('video.page5-vid',{currentTime:.51,opacity:.2},{currentTime:3,opacity:1,delay:1},'<')
            tl.fromTo('div.page5-fade-text',{opacity:0,y:10},{opacity:1,y:0,stagger:.2},'<20%')
            
        })       
    return (
        <div  className='page5 full'>
            <div className='page5-wrapper'>

                        <div className='scroll-info'> 
                                    <p style={{fontSize:'2rem'}}>{'\u2191'}</p> 
                                    <p className='scroll-info-text'>scroll</p>
                                    <p style={{fontSize:'2rem'}}>{'\u2193'}</p> 
                                </div>

                <div className='page5-info  page5-info-left'>
                    
                    <div className='page5-fade-text'>
                        <h2>up to 25% brigher outdoors</h2>
                        <p>for content that looks even more vivid in sunlight</p>
                    </div>
                    <div className='page5-fade-text'>
                        <h2>Even more display area</h2>
                        <p>thanks to a smaller TrueDepth camera system</p>
                    </div>

                </div>
                <video  muted className='page5-vid' src='/images/output-2.mp4' ></video>
                <div className='page5-info  page5-info-right'>
                        
                    <div className='page5-fade-text'>
                        <h2>Custom OLED technology</h2>
                        <p>pushes the display's incredible <br /> resolution and color to the edge</p>
                    </div>

                    <div className='page5-fade-text'>
                        <h2>up to 1200 nits </h2>
                        <p>peak brigntess for your hdr photos and videos</p>
                    </div>

                </div>
            </div>
            
        </div>
    );
}

export default Page5
