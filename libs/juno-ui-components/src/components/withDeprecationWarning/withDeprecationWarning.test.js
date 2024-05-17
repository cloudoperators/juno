/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { render } from '@testing-library/react';
import { withDeprecationWarning } from './withDeprecationWarning.component.js';

describe('withDeprecationWarning', () => {
  
  const TestComponent = () => {
    return <div>Test Component</div>;
  };

  it('should log a deprecation warning to the console', () => {
    const consoleWarnSpy = jest.spyOn(console, 'warn');
    const ComponentWithDeprecationWarning = withDeprecationWarning(TestComponent, 'This component is deprecated.');

    render(<ComponentWithDeprecationWarning />);

    expect(consoleWarnSpy).toHaveBeenCalled();
    consoleWarnSpy.mockRestore();
  });

  it('should render the wrapped component', () => {
    const ComponentWithDeprecationWarning = withDeprecationWarning(TestComponent, 'This component is deprecated.');

    const { getByText } = render(<ComponentWithDeprecationWarning />);
    expect(getByText('Test Component')).toBeInTheDocument();
  });
});



