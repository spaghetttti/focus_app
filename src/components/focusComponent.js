import React, { useState, useEffect } from 'react';

const App = () => {
  const [isTabFocused, setIsTabFocused] = useState(true);

  useEffect(() => {
    const handleWindowFocus = () => {
      setIsTabFocused(true);
    };

    const handleWindowBlur = () => {
      setIsTabFocused(false);
    };

    window.addEventListener('focus', handleWindowFocus);
    window.addEventListener('blur', handleWindowBlur);

    return () => {
      window.removeEventListener('focus', handleWindowFocus);
      window.removeEventListener('blur', handleWindowBlur);
    };
  }, []);

  return (
    <div>
      <h1>{isTabFocused ? 'Focused on the page' : 'Not focused'}</h1>
    </div>
  );
};

export default App;