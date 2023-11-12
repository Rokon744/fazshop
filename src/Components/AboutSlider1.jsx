import React from "react";
import Slider from "react-slick";
import about_gallery_slider_1 from '../img/about-gallery-slider-1.webp'
import about_gallery_slider_2 from '../img/about-gallery-slider-2.webp'
import about_gallery_slider_3 from '../img/about-gallery-slider-3.webp'

const AboutSlider1 = () => {
    const slideImage = [about_gallery_slider_1, about_gallery_slider_2, about_gallery_slider_3 , about_gallery_slider_2]
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 1,
        speed: 100
    };
    return (
        <div className="!w-[95%] m-auto max-lg:!w-[90%] max-md:!w-[80%]">
            <Slider {...settings}>
                {
                    slideImage.map((item, ind) => {
                        return <div key={ind}>
                            <h3 className="flex justify-center lg:p-5 m-auto">
                                <img src={item} alt="slider" />
                            </h3>
                        </div>
                    })
                }
            </Slider>
        </div>
    );
}

export default AboutSlider1
