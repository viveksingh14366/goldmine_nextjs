import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-fixed">
            <div className="container">
                <Link href={'/'}>
                    <Image
                        className='goldmine-logo'
                        rel="priority"
                        src={'/img/logo.png'}
                        alt="Goldmine Logo"
                        width={150}
                        height={30}
                    />
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <i class="fa-solid fa-bars" />
                    <i class="fa-solid fa-xmark"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                About us
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Blog</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Work</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Product</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Join us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Navbar