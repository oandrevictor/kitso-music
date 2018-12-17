import React from "react";
import { shallow } from "enzyme";
import Profile from "../components/Mains/Profile/Profile";
import ProfileHeader from "../components/Mains/Profile/ProfileHeader/ProfileHeader";

let user = {
  name: 'Andre',
  username: 'oandrevictor'
}

const wrapper = shallow(<Profile />);
wrapper.setState({ user: user });

it("always renders a div", () => {
  expect(wrapper.find('div'));
  expect(wrapper.length).toBeGreaterThan(0);
});

describe("the rendered div", () => {
  it("contains everything else that gets rendered", () => {
    const divs = wrapper.find('div')
    const wrappingDiv = divs.first();

    expect(wrappingDiv.children()).toEqual(wrapper.children());
  });
});

it("always renders the profile header", () => {
  expect(wrapper.find(ProfileHeader).length).toBe(1);
});
