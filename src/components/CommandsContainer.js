import React from 'react'

export default function CommandsContainer(props) {
    return (
        <div className='commandsContainer'>

            <div className='eachCommandContainer'>
                <h1>!history</h1>
                <h2 className='commandDescription'>See a random message from chat history.</h2>

                <label className="switch">
                    <input type="checkbox" name='history' onChange={props.switchHandler}/>
                    <span className="slider round"></span>
                </label>
            </div>
            
            <div className='eachCommandContainer'>
                <h1>!slots</h1>
                <h2 className='commandDescription'>Spin your own emotes to win points.</h2>

                <label className="switch">
                    <input type="checkbox" name='slots' onChange={props.switchHandler}/>
                    <span className="slider round"></span>
                </label>
            </div>
            
            
            <div className='eachCommandContainer'>
                <h1>!trivia</h1>
                <h2 className='commandDescription'>Prompt robot_ape to ask a trivia question.</h2>

                <label className="switch">
                    <input type="checkbox" name='trivia' onChange={props.switchHandler}/>
                    <span className="slider round"></span>
                </label>
            </div>
            
           
        </div>
    )
}
