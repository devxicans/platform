import react, { useState } from 'react'

const Button = () => {
    const [button, setbutton] = useState(true)

    const cambio = () =>{
        setbutton(!button)
    }

    return (
        <div>
        <button onClick={cambio}>{button ? 'Click mee!!' : 'thanks c:'} </button>
        </div>
    )
}

export default Button
