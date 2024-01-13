import { useState, useEffect, useRef } from "react";

function useSearch() {
    const [inputData, useInputData] = useState("");
    const [error, setError] = useState("");
    const firsInputLetter = useRef(true)

    useEffect(() => {

        if(firsInputLetter.current) {
            firsInputLetter.current = inputData === ""
            return
        }

        if (inputData === '') {
            setError('No se puede buscar una película vacía')
            return
        }

        if (inputData.match(/^\d+$/)) {
            setError('No se puede buscar una película con un número')
            return
        }

        if (inputData.length < 3) {
            setError('La búsqueda debe tener al menos 3 caracteres')
            return
        }

        setError(null)

    }, [inputData])

    return { inputData, useInputData, error }
}

export default useSearch