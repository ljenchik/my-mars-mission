import '@testing-library/jest-dom';
import { render, fireEvent, userEvent, waitFor, screen } from "@testing-library/react";
import { LandingPage } from "../components/LandingPage/LandingPage";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { createMemoryHistory } from 'history';


test("renders elements on the page", async () => {
  render(
    <Router>
      <LandingPage />
    </Router>
  );
  const title = screen.getByText(/Welcome/i);
  expect(title).toBeInTheDocument();
  
  expect(screen.getAllByRole("img")).toHaveLength(1);
  
  const question = screen.getByText(/Where/i);
  expect(question).toBeInTheDocument();
  
  const links = screen.getAllByRole("link")
  expect(links).toHaveLength(6);

  expect(links[1].textContent).toEqual("Mars Holidays");
  expect(links[1].href).toContain("/mars-holidays");
  
  expect(links[3].textContent).toEqual("Mars Rover Images");
  expect(links[3].href).toContain("/images");
  
  expect(links[5].textContent).toEqual("Learning Space");
  expect(links[5].href).toContain("/learning-space");

  fireEvent.mouseEnter(screen.getByText('Mars Holidays'));

  //expect(screen.getByText('Mars Holidays')).toHaveStyle('color: white');
  
  const mars_holidays = screen.getByText('Mars Holidays');
  expect(mars_holidays).toHaveClass('landing-page-link');
  });
  

  test('triggers path change', () => {
    const history = createMemoryHistory();
  
    render(
      <Router history={history}>
        <LandingPage />
      </Router>
    );
  
    const mars_holidays = screen.getByText('Mars Holidays');
    expect(mars_holidays).toBeInTheDocument();
    fireEvent.click(mars_holidays);
    
    // console.log(history.location.pathname);
    // expect(history.length).toBe(2);
    
    // expect(history.location.pathname).toBe('/mars-holidays');
    // console.log(history.location.pathname);
  });


