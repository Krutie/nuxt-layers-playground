interface Validator {
    errorMessage: string
    value?: number
}

export interface IValidation {
    [key: string]: Validator
}

export interface InputProps {
    type: string
}