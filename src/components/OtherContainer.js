import React from 'react'

export default function OtherContainer(props) {
    return (
        <div className='otherContainer'>
            <div className='eachOtherContainer'>
                <h1>!awardPoints</h1>
                <h2 className='commandDescription'>Award a viewer with points.</h2>

                <label className="switch">
                    <input type="checkbox" name='awardPoints' checked={props.currentOptions.awardPoints} onChange={props.switchHandler}/>
                    <span className="slider round"></span>
                </label>
            </div>

            <div className='eachOtherContainer'>
                <h1>@robot_ape</h1>
                <h2 className='commandDescription'>robot_ape will reply to you with a random message from chat history.</h2>

                <label className="switch">
                    <input type="checkbox" name='atRobotApe' checked={props.currentOptions.atRobotApe} onChange={props.switchHandler}/>
                    <span className="slider round"></span>
                </label>
            </div>

        </div>
    )
}
