import React from 'react'

export const Footer = () => {
    return (
        <>
            <div className="footer-wrapper">
                <h1 className='foot-text'>Accessories</h1>

                <div className="container">
                    <div className="row foot-row">
                        <div className="col">
                            <a href="#" className='acc-text'>Model S Accessories</a>
                        </div>
                        <div className="col">
                            <a href="#" className='acc-text'>Model 3 Accessories</a>
                        </div>
                    </div>
                    <div className="row foot-row">
                        <div className="col">
                            <a className='acc-text' href="#">Model X Accessories</a>
                        </div>
                        <div className="col">
                            <a className='acc-text' href="#">Model Y Accessories</a>
                        </div>
                    </div>
                    <div className="row foot-row">
                        <div className="col">
                            <a className='acc-text' href="#">Women's Apparel</a>
                        </div>
                        <div className="col">
                            <a className='acc-text' href="#">Men's Apparel</a>
                        </div>
                    </div>
                    <div className="row foot-row">
                        <div className="col">
                            <a className='acc-text' href="#">Charging</a>
                        </div>
                        <div className="col">
                            <a className='acc-text' href="#">Lifestyle</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row footer">
                    <div className="col">
                        <a className='foot-link' href="#">Tesla&nbsp;&copy;&nbsp;2022</a>
                    </div>
                    <div className="col">
                        <a className='foot-link' href="#">Privacy&nbsp;&&nbsp;Legal</a>
                    </div>
                    <div className="col">
                        <a className='foot-link' href="#">Contact</a>
                    </div>
                    <div className="col">
                        <a className='foot-link' href="#">Careers</a>
                    </div>
                    <div className="col">
                        <a className='foot-link' href="#">News</a>
                    </div>
                    <div className="col">
                        <a className='foot-link' href="#">Engage</a>
                    </div>
                    <div className="col">
                        <a className='foot-link' href="#">Locations</a>
                    </div>
                </div>
            </div>
        </>
    )
}
