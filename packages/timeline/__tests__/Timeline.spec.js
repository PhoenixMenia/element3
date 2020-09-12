import Timeline from '../Timeline.vue'
import { mount } from '@vue/test-utils'
describe('Timeline.vue', () => {
  it('should slot works', () => {
    const wrapper = mount(Timeline, {
      slots: {
        default: [`A`, `B`]
      }
    })
    expect(wrapper.find('.el-timeline').text()).toBe('AB')
  })

  it('should props reverse works', () => {
    const wrapper = mount(Timeline, {
      props: {
        reverse: true
      },
      slots: {
        default: [`A`, `B`]
      }
    })
    expect(wrapper.find('.el-timeline').text()).toBe('BA')
  })

  it('should slot null', () => {
    const wrapper = mount(Timeline, {})
    expect(wrapper.find('.el-timeline').text()).toBe('')
  })

  it('should slot empty array', () => {
    const wrapper = mount(Timeline, {
      slots: {
        default: []
      }
    })
    expect(wrapper.find('.el-timeline').text()).toBe('')
  })
})


it('should proprs reverse has classes', () => {
  const wrapper = mount(Timeline, {
    props: {
      reverse: true
    }
  })

  expect(wrapper.find('.el-timeline').classes().toContain('is-reverse'))
})

it('should provide to be function', () => {
  const wrapper = mount(Timeline, {
    props: {}
  })

  expect(typeof wrapper.provide).toBe('function')
})
