// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // deprecated
      removeListener: jest.fn(), // deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });


  // Polyfill CSS.supports for Jest environment
  if (typeof window.CSS === 'undefined') {
    window.CSS = {} as typeof CSS;
  }
  
  if (typeof window.CSS.supports !== 'function') {
    window.CSS.supports = () => false; // Adjust as necessary
  }
  
// src/setupTests.js


// Mock the attachInternals method on the global HTMLElement prototype
global.HTMLElement.prototype.attachInternals = function (): ElementInternals {
  return {
    setFormValue: () => {},
    setValidity: () => {},
    form: null,
    shadowRoot: null,
    states: new Set(),
    // Add any other methods or properties you might need to mock
  };
};