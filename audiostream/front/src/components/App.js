import React, {Component} from "react";
import {render} from "react-dom";

export default class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<h1>mirza</h1>);
    }
}

const appDiv = documents.getElementsById("app");
render(<App />, appDiv);