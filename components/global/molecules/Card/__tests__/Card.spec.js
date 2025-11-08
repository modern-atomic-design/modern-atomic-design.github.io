import { mount } from '@vue/test-utils'
import Card from '../Card.vue'

describe('Card', () => {
  it('renders with link prop', () => {
    const wrapper = mount(Card, {
      props: {
        link: '/test-page'
      },
      slots: {
        default: 'Test Content'
      },
      stubs: {
        'nuxt-link': true
      }
    })
    expect(wrapper.text()).toContain('Test Content')
  })

  it('requires link prop', () => {
    const props = Card.props
    expect(props.link.required).toBe(true)
  })
})
