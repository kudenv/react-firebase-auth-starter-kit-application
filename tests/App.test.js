import React from "react";
import ReactDOM from "react-dom";
import App from "../src/components/App/index";
import { describe, it, expect } from "../runner";

it("renders test", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});
