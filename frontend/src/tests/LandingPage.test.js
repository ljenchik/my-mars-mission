import '@testing-library/jest-dom';
import { render, fireEvent, screen, Simulate} from "@testing-library/react";
import { LandingPage } from "../components/LandingPage/LandingPage";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { navigate } from '@reach/router';
import '@testing-library/cypress/add-commands';

test("renders elements on a landing page page", async () => {
  render(
    <Router>
      <LandingPage />
    </Router>
  );

  const title1 = screen.getByText(/Welcome to/i);
  expect(title1).toBeInTheDocument();
  const title2 = screen.getByText(/Mars Mission!/i);
  expect(title2).toBeInTheDocument();
  
  expect(screen.getAllByRole("img")).toHaveLength(1);
  const image = screen.getByAltText("mars image");
  expect(image).toBeInTheDocument();
  expect(image.src).toContain(
    "https://www.solarsystemscope.com/spacepedia/images/handbook/renders/mars.png"
  );

  const question1 = screen.getByText(/Where would you/i);
  expect(question1).toBeInTheDocument();
  const question2 = screen.getByText(/like to land?/i);
  expect(question2).toBeInTheDocument();
  
  const links = screen.getAllByRole("link")
  expect(links).toHaveLength(6);

  expect(links[1].textContent).toEqual("Mars Holidays");
  expect(links[1].href).toContain("/mars-holidays");
  expect(links[0].href).toContain("/mars-holidays");
  
  expect(links[3].textContent).toEqual("Mars Rover Images");
  expect(links[3].href).toContain("/images");
  expect(links[2].href).toContain("/images");
  
  expect(links[5].textContent).toEqual("Learning Space");
  expect(links[5].href).toContain("/learning-space");
  expect(links[4].href).toContain("/learning-space");

  const button = links[1]
  fireEvent.mouseEnter(button);
    expect(links[1]).toHaveClass("landing-page-link");
    //expect(button).toHaveStyle("color: white");
    expect(links[3]).toHaveClass("landing-page-link");
    expect(links[5]).toHaveClass("landing-page-link");
  });
  
  // jest.mock('@reach/router', () => ({
  //   navigate: jest.fn()
  // }))

  // describe('Links in Landing Page', () => {
  //   test('navigation to Mars Holidays Page', () => {
  //     const { getByText } = render(
  //       <Router>
  //         <LandingPage />
  //       </Router>
  //     );
      
  //     Simulate.click(getByText(/Mars Holidays/i));
  //     expect(navigate).toHaveBeenCalledTimes(1);
  //     expect(navigate).toHaveBeenCalledWith('/mars-holidays');
  //   });
  
  //});


  it('click all links with loop', () => {

  
    cy.visit('/')
      cy.contains('Mars Holidays').click()
      cy.location('pathname').should('eq', `/mars-holidays`)
      cy.go('back')
  
  
  });

