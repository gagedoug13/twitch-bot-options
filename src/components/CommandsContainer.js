import React from 'react'

export default function CommandsContainer() {
    return (
        <div className='commandsContainer'>
            <div className='eachCommandContainer'>
                <h1>!history</h1>
                <h2 className='commandDescription'>insert a description.</h2>

                <label className="switch">
                    <input type="checkbox"/>
                    <span className="slider round"></span>
                </label>
            </div>
            
            <div className='eachCommandContainer'>
                <h1>!slots</h1>
                <h2 className='commandDescription'>insert a description.</h2>

                <label className="switch">
                    <input type="checkbox"/>
                    <span className="slider round"></span>
                </label>
            </div>
            
            <div className='eachCommandContainer'>
                <h1>@robot_ape</h1>
                <h2 className='commandDescription'>insert a description.</h2>

                <label className="switch">
                    <input type="checkbox"/>
                    <span className="slider round"></span>
                </label>
            </div>
            
            <div className='eachCommandContainer'>
                <h1>!command</h1>
                <h2 className='commandDescription'>insert a description.</h2>

                <label className="switch">
                    <input type="checkbox"/>
                    <span className="slider round"></span>
                </label>
            </div>
            
            <div className='eachCommandContainer'>
                <h1>!command</h1>
                <h2 className='commandDescription'>insert a description.</h2>

                <label className="switch">
                    <input type="checkbox"/>
                    <span className="slider round"></span>
                </label>
            </div>
           
        </div>
    )
}
