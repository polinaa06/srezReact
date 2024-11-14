import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function SliderComponent() {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500
    };
    return (
        <div className="slider-container">
            <Slider {...settings}>
                <div className="slide">
                    <img src="https://i.pinimg.com/736x/ce/47/d1/ce47d177819574fe644c341ceeef6ad7.jpg" alt="" />
                </div>

                <div className="slide">
                    <img src="https://i.pinimg.com/736x/1e/8c/eb/1e8ceb541c7913fe1690b0cce46469b5.jpg" alt="" />
                </div>

                <div className="slide">
                    <img src="https://i.pinimg.com/736x/01/7a/69/017a694f87c612e6a8e3d5ad96e52dec.jpg" alt="" />
                </div>

                <div className="slide">
                    <img src="https://i.pinimg.com/736x/16/ea/40/16ea40729954d9f7955c0aa18b5311a7.jpg" alt="" />
                </div>

                <div className="slide">
                    <img src="https://i.pinimg.com/736x/6d/c9/85/6dc9853564fbb9ad1aaf2318c36b35a8.jpg" alt="" />
                </div>

                <div className="slide">
                    <img src="https://i.pinimg.com/736x/d5/50/e0/d550e00558c74130d15839fc22907860.jpg" alt="" />
                </div>
            </Slider>
        </div>
    );
}

