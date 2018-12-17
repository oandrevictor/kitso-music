import React from "react";
import { shallow } from "enzyme";
import Song from "../components/Mains/Song/Song";
import SongInfo from "../components/Mains/Song/SongInfo"
let song = {
  title: "Gemni Feed",
  _performers: [{name: "Banks"}]
}
let match = {
  params: { id: "5c1749b5b8d286001686e2db"}
}
const wrapper = shallow(<Song.WrappedComponent match={match}/>);
wrapper.setState({ song: song });

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

it("always renders the song Info", () => {
  expect(wrapper.find(SongInfo).length).toBe(1);
});
