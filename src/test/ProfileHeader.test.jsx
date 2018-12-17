import React from "react";
import { shallow } from "enzyme";
import Profile from "../components/Mains/Profile/Profile";
import ProfileHeader from "../components/Mains/Profile/ProfileHeader/ProfileHeader";
import { Avatar } from 'antd';

let user = {
  name: 'Andre',
  username: 'oandrevictor'
}

const wrapper = shallow(<ProfileHeader user={user} />);
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

it("always is encapsulated by the profile-header div", () => {
  expect(wrapper.find('.profile-header').length).toBe(1);
});

it("always is encapsulated by the profile-header div", () => {
  expect(wrapper.find('.avatar-wrapper').length).toBe(1);
});

it("always contains an avatar", () => {
  expect(wrapper.find(Avatar).length).toBe(1);
});

it("always is encapsulated by the profile-header div", () => {
  expect(wrapper.find('.user-name').first().text()).toEqual(user.name);
});

it("always is encapsulated by the profile-header div", () => {
  expect(wrapper.find('.user-username').first().text()).toEqual("@" + user.username);
});
