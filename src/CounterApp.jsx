import PropTypes from "prop-types"
import { useState } from "react"




export const CounterApp = ({value}) => {

    const [counter, setCounter] = useState(value)

    const handleAdd = () => { 
        // setCounter(counter + 1)
        setCounter((c) => c + 1)
    }

    const handleSubtraction = () => {
        setCounter(counter - 1);
    }

    const handleReset = () => {
        setCounter(value)
    }
    

    return (
        <>
            <h1>CounterApp</h1>
            <p> {counter} </p> 
            <button onClick={ handleAdd }> +1 </button>
            <button onClick={ handleSubtraction }> -1 </button>
            <button onClick={ handleReset }> Reset </button>
        </>
    )

    
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
}