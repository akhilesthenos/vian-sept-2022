import { useEffect, useRef } from "react";
import Button from "../../components/button";
import SectionTitle from "../../components/section-title";
import Parallax from "parallax-js";

const AboutContainer = () => {
    const sceneEl = useRef(null);

    useEffect(() => {
        const parallaxInstance = new Parallax(sceneEl.current, {
            relativeInput: true,
        });

        parallaxInstance.enable();

        return () => parallaxInstance.disable();
    }, []);
    return (
        <div className="about-us position-relative">
            <div className="container">
                <div className="row mb-n7 align-items-center">
                    <div className="col-xl-5 col-md-6 offset-xl-1 mb-7">
                        <div className="about-content">
                            <SectionTitle
                                classOption="title-section"
                                subTitle="ABOUT US"
                                title="Your
                                <span class='text-primary'>
                                all Weather Support System
                                </span>
                                <br className='d-none d-xl-block' />
                                "
                            />
                            {/* <span className="date-meta">
                                Scince 2001 <span className="hr"></span>
                            </span> */}
                            <p className="mb-5">
                                Entrepreneurship is critical to sustainable
                                development and supporting both economic and
                                social gains, helping to create an inclusive
                                society. While talent is everywhere, opportunity
                                is limited.
                            </p>
                            <p className="high-light mb-8">
                                VIAN is committed to build a platform which can
                                ensure sustained support to entrepreneurship at
                                BHARAT.
                            </p>
                            <Button
                                classOption="btn btn-lg btn-dark btn-hover-dark"
                                text="Learn more"
                                path="/about"
                            />
                        </div>
                    </div>
                    <div className="col-xl-6 order-lg-first col-md-6 mb-7">
                        <div
                            className="about-photo scene text-center text-lg-left"
                            id="scene"
                            ref={sceneEl}
                        >
                            <div data-depth="0.2">
                                <img
                                    src={`${process.env.PUBLIC_URL}/images/about/2.png`}
                                    alt="about"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutContainer;
