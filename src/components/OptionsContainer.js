import React from 'react'
import CommandsContainer from './CommandsContainer'
import ChannelPointsContainer from './ChannelPointsContainer'
import OtherContainer from './OtherContainer'
import SaveButton from './SaveButton'

export default function OptionsContainer(props) {
    return (
        <div className='optionsContainer'>
            <h1>Commands</h1>
            <CommandsContainer currentOptions={props.currentOptions} switchHandler={props.switchHandler} />
            <h1>Channel Points</h1>
            <ChannelPointsContainer currentOptions={props.currentOptions} switchHandler={props.switchHandler}/>
            <h1>Other Options</h1>
            <OtherContainer currentOptions={props.currentOptions} switchHandler={props.switchHandler}/>
            
            {props.areIdenticalObjects() && <SaveButton saveChanges={props.saveChanges} />}
            <img className='questionMark' alt='couldnt get question mark' src='https://lh3.googleusercontent.com/proxy/1iZniiTYRe0ikI1NjpyMMBichcnl7kWJQi8ZB26IP7Fp_ShN-mJraal0CojyYOrNK_FUXkRmX7DKwrUqn4qUWxhD5yWBVVV4gOgu_4iJinLcqTuAbY15IeBMR5DeWiaV_GMpIRNZajnEvHVsJqqknWrwhnUT49ppBTyaTqz4S_eSeuJ0IZxyQJdl-tfz0g'></img>
            
        </div>
    )
}
