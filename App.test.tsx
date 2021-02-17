import React from "react";
import renderer from "react-test-renderer";

import App from "./App";

// Expectations: https://jestjs.io/docs/en/expect
// Matchers: https://jestjs.io/docs/en/using-matchers

describe("<App />", () => {
  // The app renders with one child
  it("has 1 child", () => {
    const tree: any = renderer.create(<App />).toJSON();
    expect(tree.children.length).toBe(1);
  });
});
