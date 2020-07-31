import React from 'react'
import OptionsContainer from './OptionsContainer'
import BotButtonsContainer from './BotButtonsContainer'

export default function Main(props) {
    return (
        <div className='mainDiv'>
            <OptionsContainer data={props.data} 
                              switchHandler={props.switchHandler}
                              currentOptions={props.currentOptions}
                              initialOptions={props.initialOptions}
                              areIdenticalObjects={props.areIdenticalObjects}
                              saveChanges={props.saveChanges} />

            <BotButtonsContainer />
        </div>
    )
}
