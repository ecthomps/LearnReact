import React from 'react'

const validation = (props) => {

    let message = "Text too long"

    if(props.strLen <= 5){
        message = "Text too short"
    }

    return(        
        <div>
            <p>{message}</p>
        </div>
    )      
}

export default validation