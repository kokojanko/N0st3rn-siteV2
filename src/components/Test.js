import React, { useState } from 'react'
import {Spring, animated} from 'react-spring'

function Test(){

    const [Open, setOpen] = useState(false)

    return(
        <div>
            <Spring
            from={
                {height: 10}
            }
            to={
                {height: 200}
            }
            reverse={!Open}
            reset={false}
            >
                {
                    StyleS => (
                        <animated.div style={StyleS} className="teeest">
                            <button onClick={() => setOpen(!Open)}>
                                &or;
                            </button>
                            <br /><br /><br /><br /><br /><br /><br />
                            <p>LUL</p>
                        </animated.div>
                    )
                }
            </Spring>
        </div>
    )
}

export default Test