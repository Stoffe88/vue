import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import HelloWorldVue from '@/components/HelloWorld.vue';

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(HelloWorldVue, {
      propsData: { msg },
    });
    expect(wrapper.text()).to.include(msg);
  });
});
