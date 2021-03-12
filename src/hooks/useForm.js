// write your custom hook here to control your checkout form
import { useState } from 'react'

const useForm= (initialValue) => {
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    
    const [values, setValues] = useState(initialValue);

    



    return [showSuccessMessage, setShowSuccessMessage, values, setValues]
    
}

export default useForm