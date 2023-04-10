import Image from "next/image"

const HomepgSilder = () => {
    return (
        <section id="homepgsilder" className="homepgsilder">
            <div className="container">
                <div className="silder-section">
                <div className="gm-silder">
                    <div>
                        <div className="hp-slider">
                            <h2 className="slider-1">Infinite</h2>
                        </div>
                    </div>
                    <div>
                        <div className="hp-slider">
                            <h2 className="slider-2">Incredible</h2>
                        </div>
                    </div>
                    <div>
                        <div className="hp-slider">
                            <h2 className="slider-3">Immersive</h2>
                        </div>
                    </div>
                </div>
                <div className="circletext">
                    <Image
                        className="circletext-img"
                        rel="priority"
                        src={'/img/circle-text.png'}
                        alt="Looking to collaborate?"
                        width={265}
                        height={250}
                    />
                </div>
                </div>
            </div>
        </section>
    )
}

export default HomepgSilder