import { shallowMount } from "@vue/test-utils";
import Button from "../../../../src/components/Button/Button";


describe("Button Component", () => {
  let wrapper;
  beforeAll(() => {
    wrapper =  shallowMount(Button,{propsData: {
        btnLink: 'http://localhost:8091'
    }});

  });
  it("It should not have a created hook defined", () => {
    expect(typeof Button.created).toBe("undefined");
  });

  it("It has a name type of string ", () => {
    expect(typeof Button.name).toBe("string");
  });

  it("It has a does not have a props property", () => {
    expect(typeof Button.props).toBe("object");
  });

  // Mount an instance and inspect the render output
  it("renders the correct message", () => {
    expect(wrapper.text()).toBe("");
  });
});
