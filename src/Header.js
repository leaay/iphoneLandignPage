import React,{useState,useEffect} from 'react';
import {gsap} from 'gsap'
const Header = () => {

    
    const [slider,setSlider] = useState(false)

    useEffect(()=>{
        const app = document.querySelector('*')
       
        slider ? 
        app.classList.add('hidden' ): 
        app.classList.remove('hidden')

        const tl = gsap.timeline({defaults:{ease:'power3.out'}})
        tl.fromTo('div.burger-wrapper',{x:500,opacity:.4},{x:0,opacity:1,duration:.5})
        tl.fromTo('div.close-area',{opacity:0},{opacity:1,duration:.2})

    },[slider])

   function  closeSlider(){
        gsap.fromTo('div.close-area',{opacity:1},{opacity:0,duration:.2})
        gsap.fromTo('div.burger-wrapper',{x:0,opacity:1},{x:500,opacity:.81,ease:'power3.out',duration:.3,onComplete:(()=>{
            setSlider(false)
        })})
        
   }

   function scrollTo(to){
       document.querySelector(`.${to}`).scrollIntoView({behavior:'smooth'})
   }

    return (
        <>
            <div style={slider ? {backgroundColor:'transparent'} : {backgroundColor:'rgba(255, 255, 255, 0.591)'}} className='header'>
                <div tabindex="0" onClick={()=>{scrollTo('first-page');setSlider(false)}} className='logo'>iPhone 13 PRO</div>
        
                <nav className='nav-box'>
                    <div tabindex="0" onClick={()=>scrollTo('page2')} className='nav-item'>Overview</div>
                    <div tabindex="0" onClick={()=>scrollTo('page3')} className='nav-item'>Models</div>
                    <div tabindex="0" onClick={()=>scrollTo('page4')} className='nav-item'>Colors</div>
                    <div tabindex="0" onClick={()=>scrollTo('page5')} className='nav-item'>What's new?</div>
                    <div tabindex="0" onClick={()=>scrollTo('page6')} className='nav-item '>Camera</div>
                </nav> 
                {   
                    slider ?
                    <p onClick={()=>closeSlider()} className='burger'>{'\u2715'}</p> :
                    <p onClick={()=>setSlider(true)} className='burger'>{'\u2630'}</p> 
                      
                 }  
            </div>

            {slider ? 
                <div className='burger-wrapper'>
                    <div onClick={()=>closeSlider()} className='close-area'></div>
                    <div className='burger-menu'>
                        <nav className='burger-box'>
                        <div onClick={()=>{scrollTo('page2');closeSlider()}} className='nav-item2'>Overview</div>
                        <div onClick={()=>{scrollTo('page3');closeSlider()}} className='nav-item2'>Models</div>
                        <div onClick={()=>{scrollTo('page4');closeSlider()}} className='nav-item2'>Colors</div>
                        <div onClick={()=>{scrollTo('page5');closeSlider()}} className='nav-item2'>What's new?</div>
                        <div onClick={()=>{scrollTo('page6');closeSlider()}} className='nav-item2 '>Camera</div>
                        </nav>
                    </div> 
                </div>
                : null}
        </>
    );
}

export default Header;
