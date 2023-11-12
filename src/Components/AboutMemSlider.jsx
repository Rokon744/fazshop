import React, { Component, useState } from "react";
import Slider from "react-slick";
import { teamMember } from "../Data";
import { BiShareAlt } from 'react-icons/bi';
import { MdOutlineEmail } from 'react-icons/md';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const AboutMemSlider = () => {
    const [extraShow, setExtraShow]= useState(true)
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        rtl: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
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
        <div>
            <Slider {...settings}>
                {
                    teamMember.map((member, ind) => {
                        const { name, profeson, image } = member
                        return <div key={ind}><h3>
                            <div className="member-cart">
                                <div className="member-img w-full relative">
                                    <img className="w-[95%] m-auto" src={image} alt="member" />
                                    <div className="member-icon absolute right-5 bottom-3 text-[34px] max-sm:text-[40px]">
                                        <span><a className="hov-icon" href="#"><MdOutlineEmail /></a></span>
                                        <span className="hover-icon relative">
                                            <span className="hover-icon-btn hov-icon"><BiShareAlt /></span>
                                            <span className={extraShow?'extra-icon max-sm:right-10 active flex space-x-[2px]':'extra-icon flex space-x-[2px]'}>
                                                <p><FaLinkedinIn/></p>
                                                <p><FaTwitter/></p>
                                                <p><FaFacebookF/></p>
                                            </span>
                                        </span>
                                    </div>
                                </div>
                                <h4 className="pt-5 text-[20px] font-bold"><a href="#">{name}</a></h4>
                                <p className="text-[12px] policy-heading uppercase">{profeson}</p>
                            </div>
                        </h3></div>
                    })
                }
            </Slider>
        </div>
    );
}

export default AboutMemSlider
