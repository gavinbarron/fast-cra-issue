import * as React from 'react'
import './App.css';
import { FluentCard, FluentCheckbox, FluentDivider } from './fluent/fluent-wrappers';

function App() {
  const data = {
    checkbox1Disabled: true,
    checkbox2Disabled: false,
  };

  return (
    <FluentCard style={{ padding: '1rem' }}>
      <h2>FAST in React</h2>
      <FluentDivider />
      <FluentCheckbox>checkbox</FluentCheckbox>
      <FluentCheckbox disabled>disabled checkbox</FluentCheckbox>
      <FluentCheckbox disabled={data.checkbox1Disabled}>
        disabled checkbox with props
      </FluentCheckbox>
      <FluentCheckbox disabled={data.checkbox2Disabled}>
        enabled checkbox with props
      </FluentCheckbox>
    </FluentCard>
  );
}

export default App;
