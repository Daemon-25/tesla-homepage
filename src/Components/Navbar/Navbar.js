import React, { useRef } from 'react'
import logo from '../Tesla.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV, faCircleXmark } from '@fortawesome/free-solid-svg-icons'

export const Navbar = () => {
    const navBtn = useRef(null);
    const overlay = useRef(null);

    const handleDropdown = e => {
        navBtn.current.click();
    }

    const handleUp = e => {
        navBtn.current.click();
    }

    const openNav = () => {
        overlay.current.style.width = '100%';
    }

    const closeNav = () => {
        overlay.current.style.width = '0%';
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg fixed-top navbar-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img src={logo} alt="logo" className="nav-logo mx-5 my-3"></img></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <FontAwesomeIcon icon={faEllipsisV} className='navbar-icon' />
                    </button>
                    <div className="collapse navbar-collapse flex-right" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mx-3 list1">
                            <li className="nav-item">
                                <div className="dropdown">
                                    <button className="button dropdown-toggle my-2" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" ref={navBtn}>
                                        Products
                                    </button>
                                    <a className="nav-link active dropdown-text" onMouseEnter={handleDropdown} onMouseLeave={handleUp}>Products</a>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1" onMouseEnter={handleDropdown} onMouseLeave={handleUp}>
                                        <li><a className="dropdown-item" href="#">Model S</a></li>
                                        <li><a className="dropdown-item" href="#">Model 3</a></li>
                                        <li><a className="dropdown-item" href="#">Model X</a></li>
                                        <li><a className="dropdown-item" href="#">Model Y</a></li>
                                        <li><a className="dropdown-item" href="#">Solar Roof</a></li>
                                        <li><a className="dropdown-item" href="#">Solar Panels</a></li>
                                    </ul>
                                </div>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Shop</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Account</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" onClick={openNav} style={{cursor: 'pointer'}}>Menu</a>
                            </li>
                        </ul>

                        {/***************Curtain Menu for Computers*************** */}
                        <div id="Menu" className="overlay" ref={overlay}>
                            <FontAwesomeIcon icon={faCircleXmark} className='closebtn' onClick={closeNav}/>

                            <div className="overlay-content">
                                <a href="#">Existing Inventory</a>
                                <a href="#">Used Inventory</a>
                                <a href="#">Trade In</a>
                                <a href="#">Test Drive</a>
                                <a href="#">Cybertruck</a>
                                <a href="#">Roadstar</a>
                                <a href="#">Utilities</a>
                                <a href="#">Find Us</a>
                            </div>
                        </div>

                        <ul className="navbar-nav ms-auto mx-3 list2">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Model S</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Model 3</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Model X</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Model Y</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Solar Roof</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Solar Panels</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Existing Inventory</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Used Inventory</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Trade-in</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Test Drive</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Shop</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Account</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Support</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
