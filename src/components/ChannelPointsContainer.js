import React from 'react'

export default function ChannelPointsContainer(props) {
    return (
        <div className='channelPointsContainer'>
            <div className='eachRewardContainer'>
                <h1>Secret Word</h1>
                <h2 className='rewardDescription'>Create a secret word.</h2>

                <label className="switch">
                    <input type="checkbox" name='secretWord' checked={props.currentOptions.secretWord} onChange={props.switchHandler}/>
                    <span className="slider round"></span>
                </label>
            </div>
            <div className='eachRewardContainer'>
                <h1>Spam</h1>
                <h2 className='rewardDescription'>Spam something in chat 10 times.</h2>

                <label className="switch">
                    <input type="checkbox" name='spamMessage' checked={props.currentOptions.spamMessage} onChange={props.switchHandler}/>
                    <span className="slider round"></span>
                </label>
            </div>
        </div>
    )
}
