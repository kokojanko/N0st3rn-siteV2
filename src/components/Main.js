import React, {useRef, useState} from 'react'
import {Spring, animated, config, Transition} from 'react-spring'
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
import Card from './Card'
import Card1 from './Card1'
import Card2 from './Card2'
import Card3 from './Card3'

function Main(){

    const [ShowVoid, setShowVoid] = useState(false)
    const [ShowFind, setShowFind] = useState(false)
    const [ShowUnderstand, setShowUnderstand] = useState(false)
    const[ShowStranger, setShowStranger] = useState(false)
    const FirstRef = useRef(null)

    return(
        <Parallax pages={2} style={{ top: '100', left: '0' }}>
            <ParallaxLayer
                factor={1}
                offset={0}
                speed={2}
            >
                          <header className="sidebar">
                            <Sidebar />
                        </header>
                <div className='mainWrapper'>
                    <BackgroundSlider
                    images={[Tower, Shop, Logovo, Mine, Mouse, Farm, Wizard]}
                    duration={7} transition={1} />
                    <div className='notSlider clearfix'>
                    <div className="wrapperNav">

                        {/* скрытие показ королевства бездонных */}

                        <div className='wrapperWhitButton'>
                            <button className="btn btn-secondary btn-lg dropdown-toggle" onClick={() => setShowVoid(!ShowVoid)}>
                                Королевсто
                            </button>
                            <Transition
                            items={!ShowVoid}
                            from={{ opacity: 0, transform: "translateY(-3rem)" }}
                            enter={{ opacity: 1, transform: "translateY(0rem)" }}
                            leave={{ opacity: 0, transform: "translateY(-3rem)" }}
                            reverse={ShowVoid}
                            config={config.gentle}
                            onRest={() =>
                            this.setState({
                                ShowVoid: !ShowVoid,
                            })
                            }>
                            {(styleVoid, item) =>
                            item && <animated.div style={styleVoid} className="ShownKindom"><h4>Бездонные &ndash; фанатики. Собрались вокруг так называемой бездны теперь и покланяются ей и её "богам". Можно уважать лишь из за неимаверной силы.<br />
                            <br />Владение мечём у них на высшом уровне хоть и непонятно откуда они взяли эти знания.</h4></animated.div>
                            }
                        </Transition>
                            <Spring
                        from={
                            {opacity: 0, transform: "translateY(50rem)"}
                        }
                        to={
                            {opacity: 1, transform: "translateY(0rem)" }
                        }
                        config={
                            config.gentle
                        }
                        reverse={!ShowVoid}
                        immediate={!FirstRef.current}
                        >
                        {
                            VoidStyle =>(
                                <animated.div style={VoidStyle} className="navigation" ref={FirstRef} >
                                        <div className="kindomIco">
                                            <img src={Sword} />
                                        </div>
                                        <div className="namekindom">
                                            <h4>Королевсто Бездонных</h4>
                                        </div>
                                </animated.div>
                            )
                        }

                        {/* скрытие, показ королевста ищущих */}

                        </Spring>
                            </div>
                            <div className='wrapperWhitButton'>
                            <button className="btn btn-secondary btn-lg dropdown-toggle" onClick={() => setShowFind(!ShowFind)}>
                                Королевсто
                            </button>
                            <Transition
                            items={ShowFind}
                            from={{ opacity: 0, transform: "translateY(-3rem)" }}
                            enter={{ opacity: 1, transform: "translateY(0rem)" }}
                            leave={{ opacity: 0, transform: "translateY(-3rem)" }}
                            reverse={ShowFind}
                            config={config.gentle}
                            onRest={() =>
                            this.setState({
                                ShowFind: !ShowFind,
                            })
                            }>
                            {(styleFind, item) =>
                            item && <animated.div style={styleFind} className="ShownKindom"><h5>Ищущие &ndash; занимающиеся поиском изобретений и различных технологий. Они в своём сознании настолько приисполнились что уже словно миллионы миллиардов изобретений открыли.
                                <br /> <br />    
                                Не счесть их силу хоть и не так много знаний дожило до нашего времени
                            </h5></animated.div>
                            }
                        </Transition>
                            <Spring
                        from={
                            {opacity: 0, transform: "translateY(50rem)"}
                        }
                        to={
                            {opacity: 1, transform: "translateY(0rem)" }
                        }
                        config={
                            config.gentle
                        }
                        reverse={ShowFind}
                        immediate={!FirstRef.current}
                        >
                        {
                            FindStyle =>(
                                <animated.div style={FindStyle} className="navigation" ref={FirstRef} >
                                        <div className="kindomIco">
                                            <img src={Mehanizm} />
                                        </div>
                                        <div className="namekindom">
                                            <h4>Королевсто ищущих</h4>
                                        </div>
                                </animated.div>
                            )
                        }
                        </Spring>

                        {/* Скрытие, показ королевства Просвещённых */}

                            </div>
                            <div className='wrapperWhitButton'>
                            <button className="btn btn-secondary btn-lg dropdown-toggle" onClick={() => setShowUnderstand(!ShowUnderstand)}>
                                Королевсто
                            </button>
                            <Transition
                            items={ShowUnderstand}
                            from={{ opacity: 0, transform: "translateY(-3rem)" }}
                            enter={{ opacity: 1, transform: "translateY(0rem)" }}
                            leave={{ opacity: 0, transform: "translateY(-3rem)" }}
                            reverse={ShowVoid}
                            config={config.gentle}
                            onRest={() =>
                            this.setState({
                                ShowUnderstand: !ShowUnderstand,
                            })
                            }>
                            {(styleUnderstand, item) =>
                            item && <animated.div style={styleUnderstand} className="ShownKindom"><h4>Просвещённые &ndash; маги, чья коллекстивная мощь сравнима с метеоритом несущимся на землю.
                                <br /> <br />
                                Все маги хоть и сильны но не способоны обращатся с другим оружием, а на изучение одного заклинания уходит пол жизни.</h4></animated.div>
                            }
                        </Transition>
                            <Spring
                        from={
                            {opacity: 0, transform: "translateY(50rem)"}
                        }
                        to={
                            {opacity: 1, transform: "translateY(0rem)" }
                        }
                        config={
                            config.gentle
                        }
                        reverse={ShowUnderstand}
                        immediate={!FirstRef.current}
                        >
                        {
                            UnderstandStyle =>(
                                <animated.div style={UnderstandStyle} className="navigation" ref={FirstRef} >
                                        <div className="kindomIco">
                                            <img src={Stuff} />
                                        </div>
                                        <div className="namekindom">
                                            <h4>Королевсто Просвещённых</h4>
                                        </div>
                                </animated.div>
                            )
                        }
                        </Spring>
                            </div>

                            {/* появление, скрытие странствующих торговцев */}

                            <div className='wrapperWhitButton'>
                            <button className="btn btn-secondary btn-lg dropdown-toggle" onClick={() => setShowStranger(!ShowStranger)}>
                                Королевсто
                            </button>
                            <Transition
                            items={ShowStranger}
                            from={{ opacity: 0, transform: "translateY(-3rem)" }}
                            enter={{ opacity: 1, transform: "translateY(0rem)" }}
                            leave={{ opacity: 0, transform: "translateY(-3rem)" }}
                            reverse={ShowVoid}
                            config={config.gentle}
                            onRest={() =>
                            this.setState({
                                ShowStranger: !ShowStranger,
                            })
                            }>
                            {(styleUnderstand, item) =>
                            item && <animated.div style={styleUnderstand} className="ShownKindom"><h4>Гильдию странствующих торговцев не волнует слава, мощь, знания или что то в это духе. Их цель это :
                                <br />
                                <br />
                                1.Поиск приключений и места под временный ночлег
                                <br />
                                <br />
                                2.Поиск того кто купит их товар                                
                                </h4>
                                </animated.div>
                            }
                        </Transition>
                            <Spring
                        from={
                            {opacity: 0, transform: "translateY(50rem)"}
                        }
                        to={
                            {opacity: 1, transform: "translateY(0rem)" }
                        }
                        config={
                            config.gentle
                        }
                        reverse={ShowStranger}
                        immediate={!FirstRef.current}
                        >
                        {
                            UnderstandStyle =>(
                                <animated.div style={UnderstandStyle} className="navigation" ref={FirstRef} >
                                        <div className="kindomIco">
                                            <h1>Картинка остутствует</h1>
                                        </div>
                                        <div className="namekindom">
                                            <h4>Cтранствующие торговцы</h4>
                                        </div>
                                </animated.div>
                            )
                        }
                        </Spring>
                            </div>
                        </div>
                    </div>
                </div>
        </ParallaxLayer>
        <ParallaxLayer 
        offset={0.99}
        speed={1.5}
        >
            <Spring
                    from={{opacity: 0}}
                    to={[
                        {opacity: 1},
                    ]}
                    delay={500}
                    >
                        {
                            styles =>(
                                <animated.div style={styles} class="jumbotron">
                                    <h1 class="display-4">Undefined project</h1>
                                    <p class="lead">Серввер полный приключений, магии, событий, квестов и королевств</p>
                                    <hr class="my-4" />
                                    <p>Будь на одной из 4-х сторон или придумай свою.</p>
                                </animated.div>
                            )
                        }
                    </Spring>
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
                <div className="mt clearfix">
                    <div className="infofirst">
                        <h1>Монстры и предметы:</h1>
                        <hr />
                        <p className='fs-4'>
                            LUL
                        </p>
                    </div>   
                    <div className='sliderWrapper'>
                        <div class="WrapperCard">
                            <Card />
                        </div>
                        <div class="WrapperCard">
                            <Card1 />
                        </div>
                        <div class="WrapperCard">
                            <Card2 />
                        </div>
                        <div class="WrapperCard">
                            <Card3 />
                        </div>
                    </div>   
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