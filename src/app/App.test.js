import React from 'react';
import { render } from '@testing-library/react';
import App from 'app/App';

describe('Run App tests', ()=>{
  it('should run App test', () => {
    render(<App />)
  })
});
