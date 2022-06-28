import React,{useState,useEffect} from 'react';
import { Swiper, SwiperSlide} from "swiper/react";
import { Pagination,EffectFade,Controller  } from "swiper";
import {gsap} from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import 'swiper/css'
import "swiper/css/pagination";
import "swiper/css/effect-fade";


const Page4 = () => {

    gsap.registerPlugin(ScrollTrigger)
    useEffect(()=>{
      gsap.timeline({scrollTrigger:{
        trigger:'.page4',
        start:'0',
        end:'100%',
        scrub:true,
        pin:true,
        pinSpacing:false
      }})
    })


    const [controlledSwiper, setControlledSwiper] = useState(null);
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + ' ' + 'bullet' + index  + '">' +  "</span>";
        },
      };

    return (
        <div className='page4 full'>
            <Swiper  
            pagination={pagination}
            modules={[Pagination , Controller]}
            
            controller={{ control: controlledSwiper }}
             className="mySwiper">
                <SwiperSlide><img className='slider-img' alt='' src='./images/blue-iphone-back.png' /></SwiperSlide>
                <SwiperSlide><img className='slider-img' alt='' src='./images/gold-iphone-back.png' /></SwiperSlide>
                <SwiperSlide><img className='slider-img' alt='' src='./images/graphite-iphone-back.png' /></SwiperSlide>
                <SwiperSlide><img className='slider-img' alt='' src='./images/silver-iphone-back.png' /></SwiperSlide>
             </Swiper>


             <Swiper  
                className="mySwiper2"
                effect={"fade"}
                modules={[EffectFade,Controller]}
                onSwiper={setControlledSwiper}
                allowTouchMove={false}
              
                >
                
                <SwiperSlide><img className='slider-closeup' alt='' src='./images/blue-closeup.png' /></SwiperSlide>
                <SwiperSlide><img className='slider-closeup' alt='' src='./images/gold-closeup.png' /></SwiperSlide>
                <SwiperSlide><img className='slider-closeup' alt='' src='./images/graphite-closeup.png' /></SwiperSlide>
                <SwiperSlide><img className='slider-closeup' alt='' src='./images/silver-closeup.png' /></SwiperSlide>
             </Swiper>

             {/* <div className='mySwiper2'>
                 <img alt='' src='./images/blue-closeup.png' className='slider-closeup' />
             </div> */}
             {/* <div className='mySwiper2-fill'>

             </div> */}
        </div>
    );
}

export default Page4;
