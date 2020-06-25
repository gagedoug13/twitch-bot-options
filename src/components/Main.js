import React from 'react'
// import Nav from './Nav'
import OptionsContainer from './OptionsContainer'
import BotButtonsContainer from './BotButtonsContainer'

export default function Main() {
    return (
        <div className='mainDiv'>
            {/* <Nav /> */}
            <OptionsContainer />

            <BotButtonsContainer />

            {/* <div className='robotIntroduction'> */}
                {/* <h1 className='font1'>Robot Ape is a Twitch bot like no other. Customize your stream with trivia commands, history, secret word, and much more.</h1> */}
            {/* </div> */}
        </div>
    )
}
