import Image from "next/image"
import BobVideo from "public/img/bob_video.jpg"
import BobGirle from "public/img/bob_girle.png"
import BobCon from "public/img/pehchaan_con.png"

const Bob = () => {
    return (
        <section id="bobsection" className="bobsection">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <div className="bob_head_section">
                            <h2 className="bobtitle">Pehchaan Con</h2>
                            <p className="bob_subtitle">Campaign</p>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center bob-ceter-content">
                    <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12">
                        <div className="bob_textsection">
                            <h2 className="bob_text_title">Calling out the con to keep billions safe.</h2>
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12">
                        <div className="bob_videosection">
                            <Image
                                className="bob-video"
                                rel="priority"
                                src={BobVideo}
                                alt="BOB PehchaanCon video"
                            />
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <div className="bob_bottom_section">
                            <Image
                                className="bob_girle"
                                rel="priority"
                                src={BobGirle}
                                alt="BOB PehchaanCon Girle"
                            />
                            <Image
                                className="pehchaan_con"
                                rel="priority"
                                src={BobCon}
                                alt="BOB PehchaanCon Girle"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Bob