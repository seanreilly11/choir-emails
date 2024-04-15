import React from "react";
import Email from "./Email";
import phone from "../assets/phone.webp";

const Hero = () => {
    return (
        <div className="bg-main hero-container">
            <div className="container col-xxl-8 py-3">
                <div className="row align-items-start g-5">
                    <div className="col-md-6">
                        <h1 className="hero-heading lh-1 mb-3">
                            Be proactive on safety
                        </h1>
                        <p className="lead">
                            People helping people, this app stems on being
                            proactive to stopping harassment and abuse instead
                            of being reactive after any potential damage has
                            already been done.
                        </p>
                        <div className="hero-email mt-4">
                            <Email />
                        </div>
                    </div>
                    <div className="col-12 col-sm-8 col-md-6 mt-0 mt-md-5">
                        <img
                            src={phone}
                            className="phone"
                            alt="Choir app"
                            loading="lazy"
                        />
                    </div>
                    {/* className="d-block mx-lg-auto img-fluid" */}
                </div>
            </div>
        </div>
    );
};

export default Hero;
