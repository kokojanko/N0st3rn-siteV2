import React, {useState, useEffect} from 'react'
import Farm from './img/Farm.png'

function Main(){

    const img = [
        <img key={Farm} src={Farm} />,
        <img key={Farm} src={Farm} />,
        <img key={Farm} src={Farm} />,
        <img key={Farm} src={Farm} />,
        <img key={Farm} src={Farm} />,
    ]

    const [activeIndex, setActiveIndex] = useState(0);
 
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((current) => {
                const res = current === img.length - 1 ? 0 : current + 1
                return res
            })
        }, 3000)
        return () => clearInterval()
        }, [])
     
            const prevImgIndex = activeIndex ? activeIndex - 1 : img.length - 1
            const nextImgIndex = activeIndex === img.length - 1 ? 0 : activeIndex + 1
    

    return(
        <div className='mainWrapper'>
            <div className="slider">
        <div className="slider-img slider-img-prev"
                key={prevImgIndex}>
            {img[prevImgIndex]}
        </div>
        <div className="slider-img"
                key={activeIndex}>
            {img[activeIndex]}
        </div>
        <div className="slider-img slider-img-next oh"
                key={nextImgIndex}>
            {img[nextImgIndex]}
        </div>
    </div>
            {/* <div class="jumbotron">
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
            </div> */}
        </div>
    )
}

export default Main