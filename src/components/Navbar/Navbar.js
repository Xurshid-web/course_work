import React from 'react'
import {Link} from 'react-router-dom'
import Style from './Navbar.module.css'
import {GrReactjs} from 'react-icons/gr'

function Navbar() {
    return (
        <div className={` ${Style.main}`} >
            <div className={Style.inmain} >
                <div className={Style.flex}  >
                    <div className={Style.logo} >
                        <Link to='/'>
                            <GrReactjs/>
                        </Link>
                    </div>
                    <div className={Style.menu} >
                        <div>
                            <Link to='/'>
                                Home
                            </Link >
                        </div>
                        <div>
                            <Link to='/photoshop'>
                                PhotoShop
                            </Link >
                        </div>
                        <div>
                            <Link to='/3dmax'>
                                3dMax
                            </Link>
                        </div>
                        <div>
                            <Link to='/illustrator'>
                                Illustrator
                            </Link>    
                        </div>
                        <div>
                            <Link to='/coreldraw'>
                                CorelDraw
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
