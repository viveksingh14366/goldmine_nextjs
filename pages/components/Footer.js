import Image from "next/image"
const Footer = () => {
    return (
        <section id="footersection" className="footersection homepgsilder">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-9 col-lg-10 col-md-12 col-sm-12">
                        <div className="main_address_container">
                            <div className="logo_company">
                                <Image
                                    className="logo_goldmine"
                                    rel="priority"
                                    src={'/img/logo.png'}
                                    alt="Goldmine Logo"
                                    width={160}
                                    height={160}
                                />
                            </div>
                            <div className="address_container">
                                <div className="row justify-content-center">
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                        <div className="mumbai_address_container img_address_cont">
                                            <Image
                                                className="city-img"
                                                rel="priority"
                                                src={'/img/mumbai-red.png'}
                                                alt="Mumbai"
                                                width={130}
                                                height={130}
                                            />
                                            <h3 className="head_text">Mumbai</h3>
                                            <p className="body_text_black">306, The Summit, Near Hanuman Road,<br />Western Express Highway,<br />Vile Parle (E), Mumbai, Maharashtra 400057<br />022 - 2626 2020<br />aastha@goldmineltd.com</p>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                        <div className="delhi_address_container img_address_cont">
                                            <Image
                                                className="city-img"
                                                rel="priority"
                                                src={'/img/delhi.png'}
                                                alt="Delhi"
                                                width={100}
                                                height={100}
                                            />
                                            <h3 className="head_text">Delhi</h3>
                                            <p className="body_text_black">4834/24 First Floor Kiran Mansion,<br />Ansari Rd, Daryaganj, New Delhi,<br />Delhi 110 002<br />011 - 2324 7278<br />aastha@goldmineltd.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="newsletter_container">
                                <h4 className="head_of_text_blac_02">Subscribe to our Newsletter</h4>
                                <div className="newsletter_text_box_container">
                                    <div className="newsletter_email_container">
                                        <input className='newsletter_text_box' type="text" placeholder='Write your email' name="" id="" />
                                        <input className='newsletter_submit_btn' type="submit" value=">" />
                                    </div>
                                    <div className="container_for_privacy_policy">
                                        <input className='checkbox_policy' type="checkbox" name="" id="" />
                                        <label class="body_text_white" htmlFor="">I agree to the privacy policy and terms of use</label>
                                    </div>
                                </div>

                            </div>
                            <div className="social_media_container">
                                <p className="body_text_black_03">Follow us</p>
                                <div className="icon_contaier">
                                    <a href=""><i className="fa fa-facebook" /></a>
                                    <div className="margin_icon"></div>
                                    <a href=""><i className="fa fa-twitter" /></a>
                                    <div className="margin_icon"></div>
                                    <a href=""><i className="fa fa-instagram" /></a>
                                    <div className="margin_icon"></div>
                                    <a href=""><i className="fa fa-linkedin" /></a>
                                    <div className="margin_icon"></div>
                                    <a href=""><i className="fa fa-youtube" /></a>
                                </div>
                                <p className='body_text_black_03 gm_copy'>© 2022 Goldmine Advertising Limited. All right reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Footer