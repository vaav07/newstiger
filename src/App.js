import "./App.css";

import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { Routes, Route } from "react-router-dom";

export default class App extends Component {
  pageSize = 6;
  render() {
    return (
      <div>
        <Navbar />
        <Routes>
        {/* <News pageSize={6} country="in" category="general" /> */}
        {/* <Route path="/" element={ <News key="home" pageSize={6} country="in" category="home" /> } /> */}
        <Route path="/" element={ <News key="general" pageSize={this.pageSize} country="in" category="general" /> } />
        <Route path="/business" element={ <News key="business" pageSize={this.pageSize} country="in" category="business" /> } />
        <Route path="/entertainment" element={ <News key="entertainment" pageSize={this.pageSize} country="in" category="entertainment" /> } />
        <Route path="/general" element={ <News key="general" pageSize={this.pageSize} country="in" category="general" /> } />
        <Route path="/health" element={ <News key="health" pageSize={this.pageSize} country="in" category="health" /> } />
        <Route path="/science" element={ <News key="science" pageSize={this.pageSize} country="in" category="science" /> } />
        <Route path="/sports" element={ <News key="sports" pageSize={this.pageSize} country="in" category="sports" /> } />
        <Route path="/technology" element={ <News key="technology" pageSize={this.pageSize} country="in" category="technology" /> } />
        </Routes>
      </div>
    );
  }
}
