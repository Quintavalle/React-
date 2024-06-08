import React from 'react';
import Hello from './Hello';
import Welcome from './Welcome';

const App = () => {
  return (
    <div>
      <Hello />
      <Welcome name="John" age={30} />
    </div>
  );
};

export default App;

