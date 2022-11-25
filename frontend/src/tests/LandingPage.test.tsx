import React from "react";
import '@testing-library/jest-dom';
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import { LandingPage } from "../components/LandingPage/LandingPage";
import { BrowserRouter as Router } from "react-router-dom";

test("displays a welcome greeting", () => {
  render(
    <Router>
      <LandingPage />
    </Router>
  );
  const title = screen.getByText(/Welcome/i);
  expect(title).toBeInTheDocument();
});

test("displays a question", async () => {
    render(
        <Router>
          <LandingPage />
        </Router>
      );
  const question = screen.getByText(/Where/i);
  expect(question).toBeInTheDocument();
});
