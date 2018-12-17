import React from "react";
import { shallow } from "enzyme";
import Song from "../components/Mains/Song/Song";
import SongInfo from "../components/Mains/Song/SongInfo"
import Lyrics from "../components/Mains/Song/Lyrics"
import HighlightText from "../components/Basics/HighlightText"

let song = {
  title: "Gemni Feed",
  _performers: [{name: "Banks"}],
  image: "https://i.scdn.co/image/e5195a3b481ff345bd11f86a87f2976d64253c32"
}
let match = {
  params: { id: "5c1749b5b8d286001686e2db"}
}
const wrapper = shallow(<SongInfo song={song}/>);
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

it("always renders the HighlightText Component", () => {
  expect(wrapper.find(HighlightText).length).toBe(1);
});

it("always renders the song Title and Performer inside the HighlightText Component", () => {
  const highlightText = wrapper.find(HighlightText);
  expect(Object.keys(highlightText.props()).length).toBe(3);
  expect(highlightText.prop('main')).toEqual(song.title);
  expect(highlightText.prop('sub')).toEqual("by " + song._performers[0].name);
  expect(highlightText.prop('image')).toEqual(song.image);
});

it("always renders the Lyrics Component", () => {
  expect(wrapper.find(Lyrics).length).toBe(1);
});
