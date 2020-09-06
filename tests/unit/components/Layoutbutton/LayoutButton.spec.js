import { shallowMount } from "@vue/test-utils";
import LayoutButton from "../../../../src/components/LayoutButton/LayoutButton";


describe("LayoutButton Component", () => {
  let wrapper;
  beforeAll(() => {
    wrapper =  shallowMount(LayoutButton,{propsData: {
        btnLink: 'http://localhost:8091'
    }});

  });
  it("It should not have a created hook defined", () => {
    expect(typeof LayoutButton.created).toBe("undefined");
  });

  it("It has a name type of string ", () => {
    expect(typeof LayoutButton.name).toBe("string");
  });

  it("It has a does not have a props property", () => {
    expect(typeof LayoutButton.props).toBe("object");
  });

  // Mount an instance and inspect the render output
  it("renders the correct message", () => {
    expect(wrapper.text()).toBe("");
  });
});
