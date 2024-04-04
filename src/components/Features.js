import React from "react";

const Features = () => {
    return (
        <div className="container py-5 mt-5">
            <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                <div className="feature col">
                    <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3"></div>
                    <h3 className="fs-2 text-body-emphasis">Post a warning</h3>
                    <p>
                        Tell people when there's an issue that you've
                        encountered so others can avoid that area or be prepared
                        when they enter it.
                    </p>
                </div>
                <div className="feature col">
                    <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3"></div>
                    <h3 className="fs-2 text-body-emphasis">Notifications</h3>
                    <p>
                        Get notifications when a warning has been posted near
                        you so you can help or avoid the area.
                    </p>
                </div>
                <div className="feature col">
                    <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3"></div>
                    <h3 className="fs-2 text-body-emphasis">
                        Historic heatmap - PRO
                    </h3>
                    <p>
                        See where there have been issues in the past near you to
                        be aware even if there's been nothing listed recently.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Features;
