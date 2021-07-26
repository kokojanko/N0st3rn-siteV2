import React, { useState } from 'react'
import {Spring, animated, config} from 'react-spring'

function Sidebar(){

    const [SideShow, setSideShow] = useState(false)

    return(
        <div>
            <Spring
            from={
                {transform: "translateY(-70%)"}
            }
            to={
                {transform: "translateY(-10%)"}
            }
            reverse={!SideShow}
            config={config.gentle}
            >
                {SideStyle =>(
                <animated.div className='OpenSide' style={SideStyle}>
                        <div className='Name sideitem'>
                            <p><h2>Undefined project</h2></p>
                        </div>
                        <div className='sideitem'>
                            <a href='/'><p>Главная</p></a>
                        </div>
                        <div className='sideitem'>
                            <a href='/bottomless'><p>Бездонные</p></a>
                        </div>
                        <div className='sideitem'>
                            <a href='/'><p>Ищущие</p></a>
                        </div>
                        <div className='sideitem'>
                            <a href='/'><p>Просвещённые</p></a>
                        </div>
                        <div className='sideitem'>
                            <a href='/'><p>Странствующие торговцы</p></a>
                        </div>
                        <div className='sideitem'>
                            <a href='/faq'><p>FAQ</p></a>
                        </div>
                    <button className="btn btn-primary" onClick={() => setSideShow(!SideShow)}>
                        <Spring
                        from={
                            {transform: "rotate(180deg)"}
                        }
                        to={
                            {transform: "rotate(0deg)"}
                        }
                        reverse={SideShow}
                        >
                            {ButtonStyle => (
                                <animated.div style={ButtonStyle}>&darr;</animated.div>
                                )
                            }  
                        </Spring>  
                    </button>
                </animated.div>)}
            </Spring>
        </div>
    )
}

export default Sidebar