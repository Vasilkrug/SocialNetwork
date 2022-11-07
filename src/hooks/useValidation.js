import {useEffect, useState} from "react";

export const useValidation = (value, validations) => {
    const [emptyFieldError, setEmptyFieldError] = useState('');
    const [minLengthError, setMinLengthError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [inputValid, setInputValid] = useState(false);

    useEffect(() => {
        for (const validation in validations) {
            switch (validation) {
                case 'minLength':
                    value.length < validations[validation] ? setMinLengthError(`Поле должно содержать ${validations[validation]} символов`) : setMinLengthError('')
                    break;
                case 'isEmail':
                    const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
                    EMAIL_REGEXP.test(String(value).toLowerCase()) ? setEmailError('') : setEmailError('Некорректный email')
                    break;
                case 'isEmpty':
                    value ? setEmptyFieldError('') : setEmptyFieldError('Поле не должно быть пустым');
                    break;
            }
        }
    }, [value])

    useEffect(() => {
        if (emptyFieldError || minLengthError || emailError) {
            setInputValid(false)
        } else {
            setInputValid(true)
        }
    }, [emptyFieldError, minLengthError, emailError])
    return {
        emptyFieldError,
        minLengthError,
        emailError,
        inputValid
    }
}