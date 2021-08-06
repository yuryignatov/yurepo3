import  React, { useState , useEffect } from 'react'

export const DateTime = () => {
	
    var [date,setDate] = useState(new Date());
    
    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });

    return(
        <div style={{fontSize:50, position:"absolute", right:700, top: '40%'}}>
            <p> Time : {date.toLocaleTimeString()}</p>
        </div>
    )
}

export default DateTime


