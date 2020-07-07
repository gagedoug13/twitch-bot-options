import React from 'react'


export default function Nav() {
    return (
        <div className='navDiv'>
            <div className='aboutDiv'>
                <h2>Robot History</h2>
            </div>
            <div className='optionsDiv'>
                <h2>Custom Commmand</h2>
            </div>
            <div className='merchDiv'>
                <h2>Settings</h2>
            </div>
            <div className='navButtonDiv'>
                <button className='navButton'>MB</button>
            </div>
        </div>
    )
}
