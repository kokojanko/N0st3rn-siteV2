import React, {useRef, useState} from 'react'
import {Spring, animated, config, Transition} from 'react-spring'
import BackgroundSlider from 'react-background-slider'
import {Parallax, ParallaxLayer} from '@react-spring/parallax'
import Toggle from './slider'
import Sidebar from '../Sidebar'
import Farm from '../img/Farm.png'
import Shop from '../img/Shop.png'
import Logovo from '../img/logovo.png'
import Mine from '../img/Mine.png'
import Mouse from '../img/mouse.png'
import Tower from '../img/Tower.png'
import Wizard from '../img/Wizard.png'
import Sword from '../img/sword.png'
import Stuff from '../img/Stuff.png'
import Mehanizm from '../img/Mehanizm.png'
import Card from './Card'
import Card1 from './Card1'
import Card2 from './Card2'
import Card3 from './Card3'

function Main(){
    const [Open, setOpen] = useState(false)
    // const [ShowVoid, setShowVoid] = useState(false)
    // const [ShowFind, setShowFind] = useState(false)
    // const [ShowUnderstand, setShowUnderstand] = useState(false)
    // const[ShowStranger, setShowStranger] = useState(false)
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
                    <Transition
                        items={!Open}
                        reverse={Open}
                        config={config.gentle}
                        onRest={() =>
                        this.setState({
                            Open: !Open,
                        })
                        }>
                        {(styleKindoms, item) =>
                        item && 
                        <animated.div style={styleKindoms} class="jumbotron greetings">
                            <h1 class="display-4">Undefined project</h1>
                            <hr class="my-4" />
                            <p class="lead">IP: /////////////</p>
                        </animated.div>
                        }
                    </Transition>
                            <Spring
                            from={
                                {width: "6%", background: "rgba(0, 0, 0, 0)"}
                            }
                            to={
                                {width: "100%", background: "rgba(68, 68, 68, 0.726)"}
                            }
                            immediate={!FirstRef.current}
                            reverse={!Open}
                            >
                                {
                                    StyleOpen =>(
                                        <animated.div style={StyleOpen} ref={FirstRef}>
                                            <div className="KindomWrapper">
                                                <button className="btn btn-secondary OpenButton" onClick={() => setOpen(!Open)}>
                                                <Spring
                                                from={
                                                    { transform: "rotate(0deg)"}
                                                }
                                                to={
                                                    {transform: "rotate(180deg)"}
                                                }
                                                config={
                                                    config.gentle
                                                }
                                                reverse={!Open}
                                                >
                                                    {
                                                        StyleOpen =>(
                                                            <animated.div style={StyleOpen}>
                                                                <div>
                                                                    &rarr;
                                                                </div>
                                                            </animated.div>
                                                        )
                                                    }
                                                </Spring>
                                                </button>
                                                <Transition
                                                items={Open}
                                                from={{}}
                                                leave={{}}
                                                enter={{}}
                                                reverse={Open}
                                                config={config.gentle}
                                                onRest={() =>
                                                this.setState({
                                                    Open: !Open,
                                                })
                                                }>
                                                {(OpenStyle, item) =>
                                                item && <animated.div style={OpenStyle} >
                                                    <div className="ShownKindom">
                                                    <h4>Бездонные &ndash; фанатики. Собрались вокруг так называемой бездны и теперь покланяются ей и её "богам". Можно уважать лишь из за неимаверной силы.<br />
                                                <br />Владение мечём у них на высшом уровне хоть и непонятно откуда они взяли эти знания.
                                                    </h4>
                                                    </div>     
                                                    <div className="ShownKindom">
                                                    <h4>Ищущие &ndash; занимающиеся поиском изобретений и различных технологий. Они в своём сознании настолько приисполнились что уже словно миллионы миллиардов изобретений открыли.
                                                        <br /> <br />    
                                                        Не счесть их силу хоть и не так много знаний дожило до нашего времени
                                                    </h4>
                                                    </div> 
                                                    <div className="ShownKindom">
                                                    <h4>Просвещённые &ndash; маги, чья коллекстивная мощь сравнима с метеоритом несущимся на землю.
                                                    <br /> <br />
                                                    Все маги хоть и сильны но не способоны обращатся с другим оружием, а на изучение одного заклинания уходит пол жизни.
                                                    </h4>
                                                    </div> 
                                                    <div className="ShownKindom">
                                                    <h4>Просвещённые &ndash; маги, чья коллекстивная мощь сравнима с метеоритом несущимся на землю.
                                                    <br /> <br />
                                                    Все маги хоть и сильны но не способоны обращатся с другим оружием, а на изучение одного заклинания уходит пол жизни.
                                                    </h4>
                                                    </div>                                           
                                                </animated.div>
                                                }
                                                </Transition>
                                                
                                            </div>
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
                        <h1 >Монстры и предметы:</h1>
                        <hr />
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
            <Spring
                    from={{opacity: 0}}
                    to={[
                        {opacity: 1},
                    ]}
                    delay={500}
                    >
                        {
                            styles =>(
                                <animated.div style={styles} >
                                    <h1 className="display-4 TCenter ">Дополнительная информация</h1>
                                    <hr className="my-4" />
                                    <div className="discordWrapper">
                                    <iframe src="https://discord.com/widget?id=856643368770732042&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
                                    </div>
                                    <div className="Command">
                                    <h1 className="display-4 fs-1 TCenter">Наша команда:</h1>
                                    <hr className="my-4" />
                                    <h3 className="display-4 fs-3 TCenter">
                                        Создатель:
                                    </h3>
                                    <p className="fs-3 TCenter">N0st3rn</p>

                                    <h3 className="display-4 fs-3 TCenter">
                                        Помогали с сюжетом и монстрами:
                                    </h3>
                                    <p className="fs-3 TCenter">DELETED и Master</p>
                                    
                                    <h3 className="display-4 fs-3 TCenter">
                                        Админы и бета-тестеры:
                                    </h3>
                                    <p className="fs-3 TCenter">Ждём пополнение</p>
                                    </div>
                                    <div className="Comming fs-4 TCenter">
                                        <h1 className=" display-4 TCenter">
                                            Контакты
                                        </h1>
                                        <hr />
                                        <ul>
                                            <li className="TelIco">Vk: <a href="https://vk.com/undefined_project">https://vk.com/undefined_project</a></li>
                                            <br />
                                            <li>Discord: <a href="https://discord.gg/E7SX8uJGBJ">Undefined Project</a></li>
                                            <br />
                                            <li>IP: //////////////////////////</li>
                                        </ul>
                                    </div>
                                </animated.div>
                            )
                        }
                    </Spring>              

            </div>
        </ParallaxLayer>
        </Parallax>
    );
}

export default Main