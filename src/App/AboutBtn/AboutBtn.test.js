import React from 'react';
import ReactDOM from 'react-dom';
import AboutBtn from './AboutBtn';
import { BrowserRouter as Router } from "react-router-dom";

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Router><AboutBtn /></Router>, div)
});

