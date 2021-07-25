import React, { useState } from 'react'
import {Transition, animated, config} from 'react-spring'
import Sidebar from '../Sidebar'

function Faq(){

    const [ShowQuestionOne, setShowQuestionOne] = useState(false)
    const [ShowQuestionTwo, setShowQuestionTwo] = useState(false)
    const [ShowQuestionThree, setShowQuestionThree] = useState(false)
    const [ShowQuestionFour, setShowQuestionFour] = useState(false)

    return(
        <div>
            <header className="sidebar">
                <Sidebar />
            </header>
            <main>
                <div className="wrapperFaq">
                    <div className="ShowFaq">
                        <div>
                            <div>
                                <button onClick={() => setShowQuestionOne(!ShowQuestionOne)} className="ShowQuestion btn btn-secondary clearfix">
                                    &darr;
                                </button>
                                <div className="question fs-1">Где мне получить помощь?</div>
                                <hr />
                            </div>
                            <Transition
                                from={
                                    {transform: "translateY(-2rem)", opacity: 0}
                                }
                                leave={
                                    {transform: "translateY(-2rem)", opacity: 0}
                                }
                                enter={
                                    {transform: "translateY(0rem)", opacity: 1}
                                }
                                items={ShowQuestionOne}
                                config={config.gentle}
                                onRest={() =>
                                this.setState({
                                    ShowQuestionOne: !ShowQuestionOne,
                                })
                                }>
                                {(QueStyle, item) =>
                                item && 
                                <animated.div style={QueStyle}>
                                    <p className="display-6">С начало посмотри есть ли тут ответ на вапрос, если не нашёл то группа в <a href="https://vk.com/undefined_project">вк</a> или <a href="https://discord.com/invite/E7SX8uJGBJ">дискорд</a> всегда открыта (писать администрации).</p>
                                </animated.div>
                                }
                            </Transition>
                        </div>
                    </div>
                    <div className="ShowFaq">
                        <div>
                            <div>
                                <button onClick={() => setShowQuestionTwo(!ShowQuestionTwo)} className="ShowQuestion btn btn-secondary clearfix">
                                    &darr;
                                </button>
                                <div className="question">Где найти информацию о новых вещах и боссах?</div>
                                <hr />
                            </div>
                            <Transition
                                items={ShowQuestionTwo}
                                from={
                                    {transform: "translateY(-2rem)", opacity: 0}
                                }
                                leave={
                                    {transform: "translateY(-2rem)", opacity: 0}
                                }
                                enter={
                                    {transform: "translateY(0rem)", opacity: 1}
                                }
                                config={config.gentle}
                                onRest={() =>
                                this.setState({
                                    ShowQuestionTwo: !ShowQuestionTwo,
                                })
                                }>
                                {(QueStyle, item) =>
                                item && 
                                <animated.div style={QueStyle}>
                                    <p className="display-6">У королей всегда есть информация поэтому лучше вступить в одно из королевст. Ну и не стесняйся просто спрашивать у игроков.</p>
                                </animated.div>
                                }
                            </Transition>
                        </div>
                    </div>
                    <div className="ShowFaq">
                        <div>
                            <div>
                                <button onClick={() => setShowQuestionThree(!ShowQuestionThree)} className="ShowQuestion btn btn-secondary clearfix">
                                    &darr;
                                </button>
                                <div className="question">Как вступить в Королевсто?</div>
                                <hr />
                            </div>
                            <Transition
                                items={ShowQuestionThree}
                                from={
                                    {transform: "translateY(-2rem)", opacity: 0}
                                }
                                leave={
                                    {transform: "translateY(-2rem)", opacity: 0}
                                }
                                enter={
                                    {transform: "translateY(0rem)", opacity: 1}
                                }
                                config={config.gentle}
                                onRest={() =>
                                this.setState({
                                    ShowQuestionThree: !ShowQuestionThree,
                                })
                                }>
                                {(QueStyle, item) =>
                                item && 
                                <animated.div style={QueStyle}>
                                    <p className="display-6">Для начала найди его. Потом обьясни зачем ты нужен королевству и после нескольких вопросов король вынесит решение.</p>
                                </animated.div>
                                }
                            </Transition>
                        </div>
                    </div>
                    <div className="ShowFaq">
                        <div>
                            <div>
                                <button onClick={() => setShowQuestionFour(!ShowQuestionFour)} className="ShowQuestion btn btn-secondary clearfix">
                                    &darr;
                                </button>
                                <div className="question">Как найти королевство?</div>
                                <hr />
                            </div>
                            <Transition
                                items={ShowQuestionFour}
                                from={
                                    {transform: "translateY(-2rem)", opacity: 0}
                                }
                                leave={
                                    {transform: "translateY(-2rem)", opacity: 0}
                                }
                                enter={
                                    {transform: "translateY(0rem)", opacity: 1}
                                }
                                config={config.gentle}
                                onRest={() =>
                                this.setState({
                                    ShowQuestionFour: !ShowQuestionFour,
                                })
                                }>
                                {(QueStyle, item) =>
                                item && 
                                <animated.div style={QueStyle}>
                                    <p className="display-6">От места где ты изначально появился иди на север и найди пещеру орка ну а там думаю разберёшся.</p>
                                </animated.div>
                                }
                            </Transition>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Faq