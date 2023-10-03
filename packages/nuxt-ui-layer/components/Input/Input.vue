<template>
    <div class="py-2">
        <div v-if="!!label"
             class="text-sm font-semibold py-1 text-gray-900">
            {{ label }}</div>
        <div class="flex items-center justify-between rounded-md shadow-sm border-2 border-primary-500">
            <Icon v-if="icon"
                  :icon="icon"
                  class="flex-none text-primary-500 h-6 mx-1 w-8" />
            <input ref="inputElementRef"
                   @input="handleInputEvent"
                   :type="type"
                   :value="modelValue"
                   :placeholder="placeholder"
                   class="w-full pt-1.5 pb-2 pl-2.5 text-gray-900 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-inset focus:ring-primary-200 sm:text-sm sm:leading-6 border-primary-500/75"
                   :class="{ 'border-l-2': icon, 'rounded-l': !icon, 'border-r-2': $slots.trailing, 'rounded-r': !$slots.trailing }"
                   :maxlength="maxLength" />
            <div v-if="search && modelValue">
                <button @click="clearInput">
                    <Icon icon="maki:cross"
                          class="flex-none text-gray-400 w-5 h-6 mt-1 -ml-8" />
                </button>
            </div>
            <div v-if="$slots.trailing"
                 class="text-xs text-gray-400 px-2">
                <slot name="trailing">
                </slot>
            </div>
        </div>
        <span v-if="helpText"
              class="text-xs text-gray-400">
            {{ helpText }}
        </span>
        <div class="block input-errors text-rose-500 text-xs"
             v-for="error of v$.selectedValue.$errors"
             :key="error.$uid">
            <div class="flex items-center">
                <Icon icon="ci:warning"
                      class="h-4 w-4" /> {{ error.$message }}
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { Icon } from '@iconify/vue';
import { useVuelidate } from '@vuelidate/core'
import useInputFieldValidation from './useInputFieldValidation';
import type { IValidation } from './types'
import type { PropType } from 'vue'

const emit = defineEmits<{
    'update:modelValue': [value: string]
    'clear': [value?: string]
    'inputElementRef': [value: HTMLInputElement]
}>()

const props = defineProps({
    modelValue: {
        type: [String, Number]
    },
    type: {
        type: String
    },
    placeholder: {
        type: String,
        required: false
    },
    label: {
        type: String
    },
    icon: {
        type: String
    },
    search: {
        type: Boolean,
        default: false
    },
    maxLength: {
        type: Number
    },
    helpText: {
        type: String
    },
    validation: {
        type: Object as PropType<IValidation>
    }
})

const handleInputEvent = (event: Event) => {
    emit('update:modelValue', (event?.target as HTMLInputElement)?.value)
    setValue(event)
}

const selectedValue = computed({
    get() {
        return props.modelValue ? props.modelValue : ''
    },
    set(value) {
        emit('update:modelValue', value)
    },
})

const clearInput = () => emit('update:modelValue', '')

const { rules } = useInputFieldValidation(props.validation ? props.validation : {})
const v$ = useVuelidate(rules, { selectedValue })

const setValue = (event: Event) => {
    selectedValue.value = (event?.target as HTMLInputElement)?.value
    v$.value.selectedValue.$touch()
}

const inputElementRef = ref<HTMLInputElement>()

onMounted(() => {
    emit('inputElementRef', inputElementRef.value as HTMLInputElement)
})

</script>