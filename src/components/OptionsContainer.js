import React from 'react'
import CommandsContainer from './CommandsContainer'
import ChannelPointsContainer from './ChannelPointsContainer'
import OtherContainer from './OtherContainer'

export default function OptionsContainer() {
    return (
        <div className='optionsContainer'>
            <h1>Commands</h1>
            <CommandsContainer />
            <h1>Channel Points</h1>
            <ChannelPointsContainer />
            <h1>Other Options</h1>
            <OtherContainer />
        </div>
    )
}
