import React from 'react'
import './App.css';
import List from './list';
import List2 from './list2';
import List3 from './list3';
function App({removeItem}) {
  return (
    <>
      <List  />
      <List2 />
      <List3 />
    </>
  );
}

export default App;
