import React, { useRef } from 'react'
import logo from '../Tesla.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'

export const Navbar = () => {
    const navBtn = useRef(null)

    const handleDropdown = e => {
        navBtn.current.click();
    }

    const handleUp = e => {
        navBtn.current.click();
    }
    return (
        <>
            <nav class="navbar navbar-expand-lg fixed-top navbar-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"><img src={logo} alt="logo" class="nav-logo mx-5 my-3"></img></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <FontAwesomeIcon icon={faEllipsisV} className='navbar-icon'/>
                    </button>
                    <div class="collapse navbar-collapse flex-right" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mx-3 list1">
                        <li className="nav-item">
                                 <div class="dropdown">
                                    <button class="button dropdown-toggle my-2" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" ref={navBtn}>
                                        Products
                                    </button>
                                    <a class="nav-link active dropdown-text" onMouseEnter={handleDropdown} onMouseLeave={handleUp}>Products</a>
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1" onMouseEnter={handleDropdown} onMouseLeave={handleUp}>
                                        <li><a class="dropdown-item" href="#">Model S</a></li>
                                        <li><a class="dropdown-item" href="#">Model 3</a></li>
                                        <li><a class="dropdown-item" href="#">Model X</a></li>
                                        <li><a class="dropdown-item" href="#">Model Y</a></li>
                                        <li><a class="dropdown-item" href="#">Solar Roof</a></li>
                                        <li><a class="dropdown-item" href="#">Solar Panels</a></li>
                                    </ul>
                                </div>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Shop</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="#">Account</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="#">Support</a>
                            </li>
                        </ul>
                        <ul class="navbar-nav ms-auto mx-3 list2">
                        <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Model S</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="#">Model 3</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="#">Model X</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Model Y</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="#">Solar Roof</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="#">Solar Panels</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Existing Inventory</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="#">Used Inventory</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="#">Trade-in</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="#">Test Drive</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Shop</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="#">Account</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="#">Support</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
