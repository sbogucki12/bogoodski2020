import React from 'react';
import ReactDOM from 'react-dom';
import ResumeHome from './ResumeHome';
import { BrowserRouter as Router } from "react-router-dom";
import { shallow } from 'enzyme';


describe("Resume component", () => {
    it("renders without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(<Router><ResumeHome /></Router>, div)
    });
    
    it("button starts with the label next", () => {
        const wrapper = shallow(<ResumeHome />);
        const button = wrapper.find('div.presentations-preview-btn').text();
        expect(button).toEqual("Next");
    });
})
