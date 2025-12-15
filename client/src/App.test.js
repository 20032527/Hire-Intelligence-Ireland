/* Basic render test for the App component */
/* Ref: https://testing-library.com/docs/react-testing-library/intro */

import { render, screen } from '@testing-library/react';

/* Renders the App component in a test environment */
  /* Ref: https://testing-library.com/docs/react-testing-library/api/#render */

import App from './App';


test('renders learn react link', () => {
  render(<App />);

  /* Finds text on the screen (case-insensitive) */
  /* Ref: https://testing-library.com/docs/queries/bytext */
  const linkElement = screen.getByText(/learn react/i);

  /* Checks if the element exists in the document */
  /* Ref: https://jestjs.io/docs/expect#tobeinthedocument */

  expect(linkElement).toBeInTheDocument();
});
