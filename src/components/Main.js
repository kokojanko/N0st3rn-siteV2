import React from 'react'
import {Spring, animated, config} from 'react-spring'
import BackgroundSlider from 'react-background-slider'
import {Parallax, ParallaxLayer} from '@react-spring/parallax'
import Toggle from './slider'
import Sidebar from './Sidebar'
import Farm from './img/Farm.png'
import Shop from './img/Shop.png'
import Logovo from './img/logovo.png'
import Mine from './img/Mine.png'
import Mouse from './img/mouse.png'
import Tower from './img/Tower.png'
import Wizard from './img/Wizard.png'
import Sword from './img/sword.png'
import Stuff from './img/Stuff.png'
import Mehanizm from './img/Mehanizm.png'
import Shoper from './img/Shoper.png'

function Main(){

    

    return(
        <Parallax pages={2} style={{ top: '100', left: '0' }}>
            <ParallaxLayer
                factor={1}
                offset={0}
                speed={3}
            >
                          <header className="sidebar">
                            <Sidebar />
                        </header>
                <div className='mainWrapper'>
                    <BackgroundSlider
                    images={[Tower, Shop, Logovo, Mine, Mouse, Farm, Wizard]}
                    duration={7} transition={1} />
                    <div className='notSlider clearfix'>
                    <Spring
                    from={{opacity: 0}}
                    to={{opacity: 1}}
                    delay={5000}
                    >
                        {
                            styles =>(
                                <animated.div style={styles} class="jumbotron">
                                    <h1 class="display-4">N0st3rn server</h1>
                                    <p class="lead">Серввер полный приключений, магии, событий, квестов и королевств</p>
                                    <hr class="my-4" />
                                    <p>Здесь ты можешь быть кем захочешь и с кем захочешь.</p>
                                    <p class="lead">
                                        <a class="btn btn-primary btn-lg" role="button">узнать больше</a>
                                    </p>
                                </animated.div>
                            )
                        }
                    </Spring>
                    <div className="wrapperNav">
                        <Spring
                        from={
                            {opacity: 0},
                            {x: -2000}
                        }
                        to={
                            {opacity: 1},
                            {x: 0}
                        }
                        delay={1000}
                        config={config.gentle}
                        >
                        {
                            kindomsNavStyle =>(
                                <animated.div style={kindomsNavStyle} class="navigation">
                                <a href="/Void">
                                    <div className="kindomIco">
                                    <img src={Sword} />
                                    </div>
                                    <div className='namekindom'>
                                    Королевсто Бездонных
                                    </div>
                                </a>
                            </animated.div>
                            )
                        }
                        </Spring>
                        <Spring
                        from={
                            {opacity: 0},
                            {x: -2000}
                        }
                        to={
                            {opacity: 1},
                            {x: 0}
                        }
                        delay={2000}
                        config={config.gentle}
                        >
                        {
                            kindomsNavStyle =>(
                            <animated.div style={kindomsNavStyle} class="navigation">
                                <a href="/Search">
                                    <div className="kindomIco">
                                        <img src={Mehanizm} />
                                    </div>
                                    <div className='namekindom'>
                                    Королевсто Ищущих
                                    </div>
                                </a>
                            </animated.div>
                            )
                        }
                        </Spring>
                        <Spring
                        from={
                            {opacity: 0},
                            {x: -2000}
                        }
                        to={
                            {opacity: 1},
                            {x: 0}
                        }
                        delay={3000}
                        config={config.gentle}
                        >
                        {
                            kindomsNavStyle =>(
                                <animated.div style={kindomsNavStyle} class="navigation">
                                    <a href="/Lighted">
                                    <div className="kindomIco">
                                        <img src={Stuff} />
                                    </div>
                                    <div className='namekindom'>
                                    Королевсто Просвещённых
                                    </div>
                                </a>
                            </animated.div>
                            )
                        }
                        </Spring>
                        <Spring
                        from={
                            {opacity: 0},
                            {x: -2000}
                        }
                        to={
                            {opacity: 1},
                            {x: 0}
                        }
                        delay={4000}
                        config={config.default}
                        >
                        {
                            kindomsNavStyle =>(
                            <animated.div style={kindomsNavStyle} class="navigation">
                                <a href="/Shopers">
                                    <div className="kindomIco">
                                        <img src={Shoper} />
                                    </div>
                                    <div className='namekindom'>
                                    Странствующие торговцы
                                    </div>
                                </a>
                            </animated.div>
                            )
                        }
                        </Spring>
                    </div>
                    </div>
                </div>
        </ParallaxLayer>
        <ParallaxLayer 
        offset={0.99}
        speed={3}
        >
            <div className="MainInfo1">
                <div className="clearfix">
                    <div className="infofirst">
                        <h1>Что вас ждёт на сервере</h1>
                        <hr />
                        <ul className='fs-4'>
                            <li>Уникальные монстры, боссы и предметы</li>
                            <li>3 Королевста и гильдии</li>
                            <li>Квесты</li>
                            <li>Прокачка определённого класса</li>
                            <li>Поступление нового контента</li>
                            <li>Длинная история мира</li>
                        </ul>
                    </div>   
                    <div className='sliderWrapper'>
                            <Toggle />
                    </div>   
                </div>         
                <div className="KindomMiniInfo">
                    <Spring
                    from={
                        {x: "0%"}
                    }
                    to={[
                        {x: "-300%"},
                        {x: "0%"}
                    ]}
                    delay={1000}
                    config={config.molasses}
                    loop={true}
                    >
                        {
                            KindomMiniInfoStyle => (
                                <animated.div style={KindomMiniInfoStyle}>
                                    <div className="rot">
                                        <h1>Ищущие -</h1>
                                    </div>
                                </animated.div>
                            )
                        }
                                                
                    </Spring>
                    <Spring
                    from={
                        {x: "0%"}
                    }
                    to={[
                        {x: "200%"},
                        {x: "0%"}
                    ]}
                    config={config.molasses}
                    delay={1000}
                    loop={true}
                    >
                        {
                            KindomMiniInfoStyle => (
                                <animated.div style={KindomMiniInfoStyle}>
                                    <div className="rot wid">
                                        <h1>&nbsp;Королевсто занимающиеся поиском изобретений</h1>
                                    </div>
                                </animated.div>
                            )
                        }
                    </Spring>
                </div>
            </div>
        </ParallaxLayer>
        <ParallaxLayer
        offset={1}
        speed={2}
        style={
            {background: "gray"}
        }
        >
            <div className="infoMain2">
                                                           
            </div>
        </ParallaxLayer>
        </Parallax>
    );
}

export default Main