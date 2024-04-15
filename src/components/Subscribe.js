import React from "react";
import Email from "./Email";

const Subscribe = () => {
    return (
        <div className="bg-main">
            <div className="container text-center py-5">
                <h2 className="mb-0">Join waitlist</h2>
                <div className="footer-lead">
                    <p className="lead">
                        If you're keen for this app, join the waitlist and get
                        notified early once the app hits the market.
                    </p>
                </div>
                <div className="footer-email mx-auto mt-4">
                    <Email />
                </div>
            </div>
        </div>
    );
};

export default Subscribe;
