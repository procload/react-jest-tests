// src/__tests__/MyComponent.test.tsx

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MyComponent from '../MyComponent';


test('renders web component', () => {
  
  render(<MyComponent />);
  // eslint-disable-next-line testing-library/no-node-access
  expect(document.querySelector('fabric-loading-button')).toBeInTheDocument();
});