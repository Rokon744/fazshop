import React, { Component } from "react";
import Slider from "react-slick";
import brand_1 from '../img/brand-1.webp'
import brand_2 from '../img/brand-2.webp'
import brand_3 from '../img/brand-3.webp'
import brand_4 from '../img/brand-4.webp'
import brand_5 from '../img/brand-5.webp'
import brand_6 from '../img/brand-6.webp'
import brand_7 from '../img/brand-7.webp'

const AboutAutoplay = () => {
    const autoPlayIcon = [brand_1, brand_2, brand_3, brand_4, brand_5, brand_6, brand_7, brand_4]
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    };
    return (
        <div className="!w-[95%] m-auto max-lg:!w-[90%] max-md:!w-[80%]">
            <Slider {...settings}>
                {
                    autoPlayIcon.map((item, ind) => {
                        return <div key={ind} className='border py-8 rounded-lg h-[170px] hover:bg-[#f9f5f5]'><h3 className='flex justify-center items-center h-full'>
                            <img src={item} alt="" />
                        </h3></div>
                    })
                }
            </Slider>
        </div>
    );
}

export default AboutAutoplay
