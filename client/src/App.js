import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Saved from "./pages/Saved";
import Search from "./pages/Search";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";


function App() {
  document.title = "Google Books";
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Search} />
          {/* <Route exact path="/saved" component={Saved} /> */}
          {/* <Route exact path="/search" component={Search} /> */}
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;