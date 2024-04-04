import React from "react";

const Nav = () => {
    return (
        <div className="bg-main">
            <div className="container">
                <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3">
                    <div className="col-md-3 mb-2 mb-md-0">
                        <h3 className="nav-heading">Choir app</h3>
                    </div>

                    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                        {/* <li>
                            <a href="#" className="nav-link px-2">
                                Home
                            </a>
                        </li> */}
                        {/* <li>
                            <a href="#" className="nav-link px-2">
                                Features
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav-link px-2">
                                Pricing
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav-link px-2">
                                FAQs
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav-link px-2">
                                About
                            </a>
                        </li> */}
                    </ul>

                    {/* <div className="col-md-3 text-end">
                        <button type="button" className="btn btn-primary">
                            Join waitlist
                        </button>
                    </div> */}
                </header>
            </div>
        </div>
    );
};

export default Nav;
