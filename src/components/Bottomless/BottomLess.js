import React from 'react'
import {Spring, animated, config, Transition} from 'react-spring'
import {Parallax, ParallaxLayer} from '@react-spring/parallax'
import Sidebar from '../Sidebar'
import Sword from '../img/sword.png'
import Sword90deg from '../img/Sword90deg.png'
import Slider from './slider'
import Mouse from '../img/mouse.png'
import VoidEater from '../img/VoidEater.png'
import VoidSword from '../img/VoidSword.png'
import Tower from '../img/Tower.png'

function BottomLess(){
    return(
        <div className="BottomWrapper">
            <header className="sidebar">
                <Sidebar />
            </header>
            <div className="wrapperAnimation">
                <Spring
                    from={
                        {opacity: 0}
                    }
                    to={
                        {opacity: 1}
                    }
                    config={config.molasses}
                    delay={5000}
                >
                    {
                        NameStyle => (
                            <animated.div style={NameStyle} className="jumbotron BottomName">
                                <h1 className="display-4">Королевсто Бездонных</h1>
                                <div className="underlineBot"><hr classNameass="my-4" /></div>
                                <p className="lead">Бездна &ndash; дом</p>
                            </animated.div>
                        )
                    }
                </Spring>
                <Spring
                from={
                    {transform:"translateX(-2000px) rotate(180deg)"}
                }
                to={
                    {transform:"translateX(-0px) rotate(0deg)"}
                }
                delay={3500}
                config={config.slow}
                >
                {
                    StyleSword => (<animated.div style={StyleSword} className="animationSword">
                    <img src={Sword} className="sword" />
                </animated.div>)
                }
                </Spring>
                <Spring
                from={
                    {transform:"translateX(2000px) rotate(-180deg)"}
                }
                to={
                    {transform:"translateX(-0px) rotate(0deg)"}
                }
                delay={3500}
                config={config.slow}
                >
                {
                    StyleSword => (<animated.div style={StyleSword} className="animationSword">
                    <img src={Sword90deg} className="sword" />
                </animated.div>
                )}
                </Spring>
            </div>
            <div className="BottomInfo">
            <div className="MainInfo1">
                <div className="clearfix">
                <div className="mt">
                    <h1 className="display-4">Мы предлагаем вам вступить в пустоту</h1>
                    <hr classNameass="my-4" />
                    <p className="lead">Что у нас есть:</p>
                </div>
                    <div className="infofirst">
                        <h1>Что вас ждёт на сервере</h1>
                        <hr />
                        <ul className="fs-3">
                        <li>Немыслимая мощь меча</li>
                        <li>Бездна которая поможет в любой момент</li>
                        <li>Несканчаемые ресурсы прямяком из Бездны</li>
                    </ul>
                    </div>   
                    <div className='sliderWrapper'>
                            <Slider />
                    </div>   
                    </div>
                </div> 
                <div className="Vistavka">
                    
                </div>
            </div>
            <div className="wrapperBotCard">
                <div className="BotImgItem">
                    <img src={Mouse} />
                </div>
                <div className="BotImgItem">
                    <img src={VoidSword} />
                </div>
                <div className="BotImgItem">
                    <img src={Tower} />
                </div>
                <div className="BotImgItem">
                    <img src={VoidEater} />
                </div>
            </div>
            <div>
                <div className="jumbotron BottomName mt">
                    <h1 className="display-4">Взамен мы просим</h1>
                    <div className="underlineBot"><hr classNameass="my-4" /></div>
                </div>
                <p className="mt">
                    <ul className="display-6">
                        <li>Поклоняться и уважать буздну</li>
                        <li>Приносить ей пользу в виде победы над боссами и монстрами</li>
                        <li>Строить и охранять храмы</li>
                    </ul>
                </p>
                <p>
                    P.S Вступить можно написав королю в дискорде
                </p>
            </div>
        </div>
    )
}

export default BottomLess