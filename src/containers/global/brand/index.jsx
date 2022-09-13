import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
import HomeData from "../../../data/home.json";
import Brand from "../../../components/brand/index";
// import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/modules/effect-fade/effect-fade";
import "swiper/modules/navigation/navigation";
import "swiper/modules/pagination/pagination";
import SwiperCore, { Autoplay } from "swiper";

SwiperCore.use([Autoplay]);
const BrandContainer = () => {
    const swiperOption = {
        loop: true,
        speed: 800,
        autoplay: {
            delay: 1000,
            disableOnInteraction: false,
        },
        slidesPerView: 4,
        spaceBetween: 0,
        pagination: false,
        navigation: false,
        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 2,
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 2,
            },
            // when window width is >= 640px
            768: {
                slidesPerView: 3,
            },

            // when window width is >= 640px
            992: {
                slidesPerView: 4,
            },
        },
    };
    return (
        <div className="brand-section section-py">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Swiper className="brand-carousel" {...swiperOption}>
                            {HomeData[1].brand &&
                                HomeData[1].brand.map((single, key) => {
                                    return (
                                        <SwiperSlide key={key}>
                                            <Brand key={key} data={single} />
                                        </SwiperSlide>
                                    );
                                })}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandContainer;
