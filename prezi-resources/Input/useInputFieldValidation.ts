import { computed } from 'vue'
import { required, minLength, maxLength, helpers, numeric, email, minValue } from '@vuelidate/validators'
import type { IValidation } from './types'

export default function (validation: IValidation) {

    const rules = computed(() => ({
        selectedValue: {
            required: validation?.required ? helpers.withMessage(validation?.required.errorMessage, required) : false,
            minValue: validation?.minValue && validation?.minValue.value ? helpers.withMessage(validation?.minValue.errorMessage, minValue(+validation?.minValue?.value)) : false,
            numeric: validation?.numeric ? helpers.withMessage(validation?.numeric.errorMessage, numeric) : false,
            email: validation?.email ? helpers.withMessage(validation?.email.errorMessage, email) : false,
            minLength: validation?.minLength ? helpers.withMessage(validation?.minLength.errorMessage, minLength(+validation.minLength.value)) : false,
            maxLength: validation?.maxLength ? helpers.withMessage(validation?.maxLength.errorMessage, maxLength(+validation.maxLength.value)) : false
        }
    }))

    return {
        rules
    }
}