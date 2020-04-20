import { shallowMount, mount, createLocalVue } from "@vue/test-utils";
import BaseFormAuth from "@/components/base/BaseFormAuth.vue";

const localVue = createLocalVue();
import "@/bootstrap.js";

describe("BaseFormAuth.vue", () => {
  it("render", () => {
    // const msg = "Вход";
    // const wrapper = shallowMount(BaseFormAuth, {
    //   propsData: { msg }
    // });
    const wrapper = mount(BaseFormAuth, {
      mocks: {
        $t: (value) => `$t('${value}')`,
      },
      localVue,
    });
    wrapper.vm.show("auth");
    expect(wrapper.isVueInstance()).toBeTruthy();
    expect(wrapper.element).toMatchSnapshot();
  });
});
