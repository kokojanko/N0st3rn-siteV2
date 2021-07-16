import React, {useState, useEffect} from 'react'
import Farm from './img/Farm.png'
import Shop from './img/Shop.png'
import Logovo from './img/logovo.png'
import Mine from './img/Mine.png'
import Mouse from './img/mouse.png'
import Tower from './img/Tower.png'
import Wizard from './img/Wizard.png'
import BackgroundSlider from 'react-background-slider'

function Main(){
    return(
        <div className='mainWrapper'>
            <BackgroundSlider
            images={[Farm, Shop, Logovo, Mine, Mouse, Tower, Wizard]}
            duration={7} transition={1} />
            <div className='notSlider'>
            <div class="jumbotron">
                <h1 class="display-4">N0st3rn server</h1>
                <p class="lead">Сервер где ты модешь быть диктатором, магом, королём, воином, крестьянином, странствующим торговцем и т.д.</p>
                <hr class="my-4" />
                <p>Тут всё зависит от силы, навыков дипломатии или понимания мира.</p>
                <p class="lead">
                    <a class="btn btn-primary btn-lg" href="#" role="button">узнать больше</a>
                </p>
            </div>
            <div className="wrapperNav">
                <div className='navigation'>

                </div>
                <div className='navigation'>

                </div>
                <div className='navigation'>

                </div>
                <div className='navigation'>

                </div>
            </div>
            </div>
        </div>
    )
}

export default Main