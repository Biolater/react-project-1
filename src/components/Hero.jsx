import React from 'react';
import "./hero.css";
import flipkartImg from '../images/flipkart.png';
import amazonImg from '../images/amazon.png';
import heroImg from '../images/hero-image.png';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero__left">
                <h1 className="hero__title">
                    YOUR FEET DESERVE THE BEST
                </h1>
                <p className="hero__explanation">
                    YOUR FEET DESERVE THE BEST, AND WE’RE HERE TO HELP YOU WITH OUR SHOES. YOUR FEET DESERVE THE BEST, AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
                </p>
                <div className="hero__buttons">
                    <button className="hero__shop__button">
                        Shop Now
                    </button>
                    <button className="hero__category__button">
                        Category
                    </button>
                </div>
                <div className="hero__shop">
                    <p className="hero__shop__text">
                        Also Available On
                    </p>
                    <div className="hero__shop__items">
                        <img src={flipkartImg} alt="Flipkart Logo" />
                        <img src={amazonImg} alt="Amazon Logo" />
                    </div>
                </div>
            </div>
            <div className="hero__right">
                <img src={heroImg} className='hero__right__image' alt="Hero Image" />
            </div>
        </section>
    )
}

export default Hero;
