import React,{useEffect} from 'react';
import {gsap} from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Page3 = () => {

    gsap.registerPlugin(ScrollTrigger);
    useEffect(()=>{
        const tl = gsap.timeline(
        {
        scrollTrigger:{
            start:'-10%',
            trigger:'.page3',
            end:'50%',
            
        
        },defaults:{
            ease:'power3.out'
        }
    })
        tl.to('img.page3-img1',{x:'-12%'})
        tl.to('img.page3-img2',{x:'12%'},'<')
        tl.fromTo('div.page3-phone-text',{opacity:0},{opacity:1,scale:1.1})
    })

    return (
        <div className='page3 full'>
            <div className='page3-box'>
                <div className='page3-phone-text page3-phone-text-proMax'>
                    <p className='page3-title'>iPhone 13 Pro Max</p>
                    <p className='page3-size'>6.7"</p>
                </div>

                <div className='page3-images'>
                <img className='page3-img1' src='./images/large-phone.png'  alt=''/>
                <img className='page3-img2' src='./images/small-phone.png'  alt=''/>
                </div>
                

                <div className='page3-phone-text  page3-phone-text-pro'>
                    <p className='page3-title'>iPhone 13 Pro </p>
                    <p className='page3-size'>6.1"</p>
                </div>
            </div>

            

        
        </div>
    );
}

export default Page3;
