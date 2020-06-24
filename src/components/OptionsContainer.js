import React from 'react'
import CommandsContainer from './CommandsContainer'
import ChannelPointsContainer from './ChannelPointsContainer'

export default function OptionsContainer() {
    return (
        <div className='optionsContainer'>
            <h1>Commands</h1>
            <CommandsContainer />
            <h1>channel points</h1>
            <ChannelPointsContainer />
        </div>
    )
}
