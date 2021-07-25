import React from 'react'

function Sidebar(){
    return(
        <div>
            <div className='sideitem'>
                <p><h1>Undefined project</h1></p>
            </div>
            <div className='sideitem'>
                 <a href='/'><p>Главная</p></a>
            </div>
            <div className='sideitem'>
                <a href='/'><p>Home</p></a>
            </div>
            <div className='sideitem'>
                <a href='/'><p>Home</p></a>
            </div>
            <div className='sideitem'>
                <a href='/faq'><p>FAQ</p></a>
            </div>
        </div>
    )
}

export default Sidebar