import { shallowMount } from "@vue/test-utils";
import Alert from "../../../../src/components/Alert/Alert";


describe("Alert Component", () => {
  let wrapper;
  beforeAll(() => {
    wrapper =  shallowMount(Alert,{propsData: {
        text: 'This is an alert'
    }});

  });
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });

  test("It should not have a created hook of undefined", () => {
    expect(typeof Alert.created).toBe("undefined");
  });

  test("It has a name type of string ", () => {
    expect(typeof Alert.name).toBe("undefined");
  });

  // Mount an instance and inspect the render output
  it("renders the correct props text", () => {
    expect(wrapper.text()).toBe("This is an alert");
  });
});
