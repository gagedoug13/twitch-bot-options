import React from 'react'
import Nav from './Nav'
import OptionsContainer from './OptionsContainer'
import BotButtonsContainer from './BotButtonsContainer'

export default function Main(props) {
    return (
        <div className='mainDiv'>
            <Nav />
            
            <OptionsContainer data={props.data} 
                              switchHandler={props.switchHandler}
                              currentOptions={props.currentOptions}
                              initialOptions={props.initialOptions}
                              areIdenticalObjects={props.areIdenticalObjects}
                              saveChanges={props.saveChanges} />

            <BotButtonsContainer />

            {/* <div className='robotIntroduction'> */}
                {/* <h1 className='font1'>Robot Ape is a Twitch bot like no other. Customize your stream with trivia commands, history, secret word, and much more.</h1> */}
            {/* </div> */}
        </div>
    )
}
