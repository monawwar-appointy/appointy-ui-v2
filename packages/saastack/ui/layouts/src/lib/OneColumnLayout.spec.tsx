import { render } from '@testing-library/react';

import OneColumnLayout from './OneColumnLayout';

describe('Layouts', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<OneColumnLayout />);
    expect(baseElement).toBeTruthy();
  });
});
