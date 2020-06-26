import React from 'react'
import CommandsContainer from './CommandsContainer'
import ChannelPointsContainer from './ChannelPointsContainer'
import OtherContainer from './OtherContainer'
import SaveButton from './SaveButton'

export default function OptionsContainer(props) {
    return (
        <div className='optionsContainer'>
            <h1>Commands</h1>
            <CommandsContainer data={props.data} switchHandler={props.switchHandler} />
            <h1>Channel Points</h1>
            <ChannelPointsContainer data={props.data} switchHandler={props.switchHandler}/>
            <h1>Other Options</h1>
            <OtherContainer data={props.data} switchHandler={props.switchHandler}/>
            
            {props.areIdenticalObjects() && <SaveButton />}
            {/* {console.log(props.areIdenticalObjects)} */}
            
        </div>
    )
}
