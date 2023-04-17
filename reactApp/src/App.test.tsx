import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// // We describe what we want to test:
// test('renders learn react link', () => {
//   // Arrange: prepare the environment, 
//   //         render the component.
//   render(<App />);
  
//   // Act: try to find the expected link.
//   const linkElement = screen.getByText(/learn react/i);
  
//   // Assert: check that required link 
//   //        is indeed in the document.
//   expect(linkElement).toBeInTheDocument();
// });


// Let's say we need to create a function
// that should divide number `a` by number `b`
// and return a round answer.
export function divide(a: number, b: number): number {
  
  // Sure, we cannot divide by 0,
  // so in this case we will throw an error.
  if (b === 0) {
    throw new Error("You can't divide by zero.");
  }
  
  // If everything is okay, we will return
  // a round division result.
  return Math.round(a / b);
}

describe('divide function', () => {
  describe('when given to integers', () => {
    it("should return a division result", () => {
      // Arrange: prepare function arguments
      // and the expected division result.
      // In this example 10 / 2 === 5:
      const [a, b, expected] = [10, 2, 5];
      
      // Here we use array destructuring 
      // to assing `a === 10`, `b === 2`, 
      // and `expected === 5`.
      
      // Act: use the `divide` function 
      // to get an actual function result.
      const result = divide(a, b);
      
      // Assert: compare expected result
      // with a function result.
      expect(result).toEqual(expected);
    });
  })
})