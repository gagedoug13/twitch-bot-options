import React from 'react'

export default function CommandsContainer(props) {
    return (
        <div className='commandsContainer'>
            {console.log(props.currentOptions.history)}
            <div className='eachCommandContainer'>
                <div className='commandNameContainer'>
                    <h1>!history</h1>
                </div>

                <div className='commandDescriptionContainer'>
                    <h2 className='commandDescription'>See a random message from chat history.</h2>
                </div>
                
                <div className='commandButtonContainer'>
                    <label className="switch">
                        <input type="checkbox" name='history' checked={props.currentOptions.history}  onChange={props.switchHandler}/>
                        <span className="slider round"></span>
                    </label>
                </div>
            </div>
            
            <div className='eachCommandContainer'>
                <div className='commandNameContainer'>
                    <h1>!slots</h1>
                </div>
                
                <div className='commandDescriptionContainer'>
                    <h2 className='commandDescription'>Spin your own emotes to win points.</h2>
                </div>

                <div className='commandButtonContainer'>
                    <label className="switch">
                        <input type="checkbox" name='slots' checked={props.currentOptions.slots} onChange={props.switchHandler}/>
                        <span className="slider round"></span>
                    </label>
                </div>
            </div>
            
            
            <div className='eachCommandContainer'>
                <div className='commandNameContainer'>
                    <h1>!trivia</h1>
                </div>

                <div className='commandDescriptionContainer'>
                    <h2 className='commandDescription'>Prompt robot_ape to ask a trivia question.</h2>
                </div>

                <div className='commandButtonContainer'>
                    <label className="switch">
                        <input type="checkbox" name='trivia' checked={props.currentOptions.trivia} onChange={props.switchHandler}/>
                        <span className="slider round"></span>
                    </label>
                </div>
            </div>
        </div>
    )
}
