import React from 'react'

export default function ChannelPointsContainer(props) {
    return (
        <div className='channelPointsContainer'>
            <h1>NOTE: When adding these channel point rewards, you must use the EXACT name of the reward.</h1>
            <div className='eachRewardContainer'>
                <div className='commandNameContainer'>
                    <h1>Secret Word</h1>
                </div>

                <div className='commandDescriptionContainer'>
                    <h2 className='rewardDescription'>Create a secret word.</h2>
                </div>

                <div className='commandButtonContainer'>
                    <label className="switch">
                        <input type="checkbox" name='secretWord' checked={props.currentOptions.secretWord} onChange={props.switchHandler}/>
                        <span className="slider round"></span>
                    </label>
                </div>
            </div>

            <div className='eachRewardContainer'>
                <div className='commandNameContainer'>
                    <h1>Spam</h1>
                </div>
                
                <div className='commandDescriptionContainer'>
                    <h2 className='rewardDescription'>Spam something in chat 10 times.</h2>
                </div>

                <div className='commandButtonContainer'> 
                    <label className="switch">
                        <input type="checkbox" name='spamMessage' checked={props.currentOptions.spamMessage} onChange={props.switchHandler}/>
                        <span className="slider round"></span>
                    </label>
                </div>
            </div>
        </div>
    )
}
