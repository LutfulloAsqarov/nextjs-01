import React from "react";
import "./hero.scss";

const Hero = () => {
    return (
        <div id="hero">
            <div className="container hero">
                <div className="hero__wrapper">
                    <span>🌱</span>
                    <h1> The nature candle</h1>
                    <p>
                        All handmade with natural soy wax, Candleaf is a
                        companion for all your pleasure moments
                    </p>
                    <button>Discovery our collection</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
