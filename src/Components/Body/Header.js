import React from 'react'
import Typed from 'react-typed';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';


const slideImages = [
    'https://tesla-cdn.thron.com/delivery/public/image/tesla/e90a341e-f9ca-4aa1-8eab-94afea118786/bvlatuR/std/2880x1800/M3-Homepage-D',
    'https://www.tesla.com/sites/default/files/images/blogs/model-x-blog.jpg',
    'https://tesla-cdn.thron.com/delivery/public/image/tesla/45992f1c-a33a-4a04-b1f0-338aff182f8e/bvlatuR/std/2880x1800/_25-Hero-D',
    'https://cleantechnica.com/files/2019/03/tesla-solar-roof-tiles-energy-powerwall-smooth-glass-model-3.jpg'
];

export const Header = () => {

    return (
        <>
            <div>
                <Slide easing="ease" duration={3000} arrows={false}>
                    {slideImages.map((slideImage, index) => (
                        <div className="each-slide" key={index}>
                            <div style={{ 'backgroundImage': `url(${slideImage})` }}>
                            </div>
                        </div>
                    ))}
                </Slide>
            </div>

            <div className="main-info">
                <h1 className='main-text'>Our Special Products</h1>

                <Typed
                    className='typed-text'
                    strings={['Model S',
                        'Model 3',
                        'Model X',
                        'Model Y',
                        'Solar Roof',
                        'Solar Panels'
                    ]}
                    typeSpeed={90}
                    backSpeed={80}
                    loop >
                </Typed>

            </div>
        </>
    )
}
