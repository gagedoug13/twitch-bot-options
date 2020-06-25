import React from 'react'

export default function ChannelPointsContainer() {
    return (
        <div className='channelPointsContainer'>
            <div className='eachRewardContainer'>
                <h1>Create A Secret Word.</h1>
                <h2 className='rewardDescription'>insert a description.</h2>

                <label className="switch">
                    <input type="checkbox"/>
                    <span className="slider round"></span>
                </label>
            </div>
            <div className='eachRewardContainer'>
                <h1>Spam Something In Chat.</h1>
                <h2 className='rewardDescription'>insert a description.</h2>

                <label className="switch">
                    <input type="checkbox"/>
                    <span className="slider round"></span>
                </label>
            </div>
        </div>
    )
}
