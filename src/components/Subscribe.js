import React from "react";
import Email from "./Email";

const Subscribe = () => {
    return (
        <div className="bg-main">
            <div className="container text-center py-5">
                <h2 className="mb-0">Join waitlist</h2>
                <p className="lead">
                    Get notified early once the app hits the market.
                </p>
                <div className="w-50 mx-auto mt-4">
                    <Email />
                </div>
            </div>
        </div>
    );
};

export default Subscribe;
