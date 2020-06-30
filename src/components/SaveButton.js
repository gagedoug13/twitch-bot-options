import React from 'react'

export default function SaveOptionsButton(props) {
    return (
        <div>
            <button className='saveButton' onClick={props.saveChanges}>Save Options</button>
        </div>
    )
}
