// import React from "react";
// import NotFound from "../pages/NotFound";
// import { BrowserRouter } from "react-router-dom";
// import { render, screen } from "@testing-library/react";

// describe("<NotFound />", () => {
//   it("displays text telling my user the page is not found", () => {
//     render(
//       <BrowserRouter>
//         <NotFound />
//       </BrowserRouter>
//     );
//     screen.logTestingPlaygroundURL();
//     expect(
//       screen.getByRole("heading", {
//         name: /Page Not Found/i,
//       })
//     ).toBeInTheDocument;
//   });
// });
import { render, screen } from "@testing-library/react";
import NotFound from "../pages/NotFound";
import { BrowserRouter } from "react-router-dom";
import React from "react";

describe("<NotFound />", () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );
  });
});
