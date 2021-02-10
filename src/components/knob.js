import React, { useState } from 'react'
import {  Donut}  from 'react-dial-knob'

export default ({text, color, min, bgColor}) => {
    const [value, setValue] = useState(0)
    return <Donut
        diameter={200}
        min={ 0}
        max={100}
        step={1}
        value={value} 
        theme={{
            donutColor:  color,
            centerColor: '#282c34',
            centerFocusedColor: '#282c34',
            bgrColor: bgColor
        }}
        onValueChange={setValue}
        ariaLabelledBy={'my-label'}
        style={{padding: 15}}
    >
        <label id={'my-label'}>{text}</label>
    </Donut>
}