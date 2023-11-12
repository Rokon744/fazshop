import React from 'react'
import Slider from "react-slick";
import { homeSlide } from '../Data';

const HomeSlide = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
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
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className='w-[full] h-auto pt-20 p-10'>
            <Slider {...settings}>
                {
                    homeSlide.map((item)=>{
                        const {image,id,title} = item
                        return <div key={id} className='w-full p-2 lg:p-0 cursor-pointer'>
                            <a href="#">
                            <h3 className='flex justify-center'>
                                <img src={image} alt="" />
                            </h3>
                            <p className='text-center text-[16px]'>{title}</p>
                            </a>
                        </div>
                    })
                }
            </Slider>
        </div>
    );
}

export default HomeSlide
