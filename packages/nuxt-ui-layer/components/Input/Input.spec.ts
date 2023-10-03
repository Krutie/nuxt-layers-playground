import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Input from './Input.vue'

describe('VUIInput', () => {
  it('renders properly', () => {
    const wrapper = mount(Input, { props: { label: 'Hello VUIInput' } })
    expect(wrapper.text()).toContain('Hello VUIInput')
  })
})
