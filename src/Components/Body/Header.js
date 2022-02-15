import React from 'react'
import Typed from 'react-typed';

export const Header = () => {
    return (
        <>
            <div className="header-wrapper" >
                <div className="main-info">
                    <h1 className='main-text'>Our Special Products</h1>
                    <div>
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
                </div>
            </div>
        </>
    )
}
