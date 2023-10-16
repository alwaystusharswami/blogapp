import { useState } from "react"

export default function useCustomHook(initialvalue) {
    const[value,setValue]=useState(initialvalue);
    function handleChange(e){
        setValue(e.target.value);
    }
    return {value,onchange:handleChange}
}
