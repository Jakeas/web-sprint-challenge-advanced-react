// write your custom hook here to control your checkout form
import { useState } from 'react'

const useForm= (props) => {
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    
    const [values, setValues] = useState('');

    const handleChanges = (e) => {
        setValues({ 
            ...values, 
            [e.target.name]: 
            e.target.value });
      }; console.log({values})

console.log({handleChanges})

    return [showSuccessMessage, setShowSuccessMessage, values, setValues, handleChanges]
    
}

export default useForm