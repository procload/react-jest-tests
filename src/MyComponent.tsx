// src/MyComponent.tsx

import React from 'react';
import { LoadingButton } from '@fabric-msft/fabric-react';
import { setTheme, webLightTheme } from '@fabric-msft/fabric-react';

// Ensure the theme is set up
setTheme(webLightTheme);

const MyComponent = () => (
  <>
    <h1>Hello, Web Components!</h1>
    <LoadingButton
      onClick={() => {
        alert('Button clicked');
      }}
    >
      Hi
    </LoadingButton>
    
  </>
);

export default MyComponent;