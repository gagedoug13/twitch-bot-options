import React from 'react'
import CommandsContainer from './CommandsContainer'
import ChannelPointsContainer from './ChannelPointsContainer'
import OtherContainer from './OtherContainer'
import SaveButton from './SaveButton'

export default function OptionsContainer(props) {
    return (
        <div className='optionsContainer'>
            <h1 className='optionsTitle'>Commands</h1>
            <CommandsContainer currentOptions={props.currentOptions} switchHandler={props.switchHandler} />
            <h1 className='optionsTitle'>Channel Points</h1>
            <ChannelPointsContainer currentOptions={props.currentOptions} switchHandler={props.switchHandler}/>
            <h1 className='optionsTitle'>Other Options</h1>
            <OtherContainer currentOptions={props.currentOptions} switchHandler={props.switchHandler}/>
            {props.areIdenticalObjects() && <SaveButton saveChanges={props.saveChanges} />}    
        </div>
    )
}
