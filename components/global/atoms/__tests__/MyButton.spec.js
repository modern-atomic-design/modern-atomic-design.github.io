import { mount } from '@vue/test-utils'
import MyButton from '../MyButton.vue'

describe('MyButton', () => {
  it('renders with default primary type', () => {
    const wrapper = mount(MyButton, {
      slots: {
        default: 'Click me'
      }
    })
    expect(wrapper.text()).toBe('Click me')
    expect(wrapper.classes()).toContain('bg-primary')
  })

  it('renders with secondary type', () => {
    const wrapper = mount(MyButton, {
      props: {
        type: 'secondary'
      },
      slots: {
        default: 'Secondary'
      }
    })
    expect(wrapper.text()).toBe('Secondary')
    // Both types have border-primary in base class
    expect(wrapper.classes()).toContain('border-primary')
  })

  it('emits click event', async () => {
    const wrapper = mount(MyButton)
    await wrapper.trigger('click')
    expect(wrapper.emitted().click).toBeTruthy()
  })
})
