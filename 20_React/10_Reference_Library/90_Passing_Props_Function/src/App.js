import React, { useState } from 'react';
import MessageForm from './components/MessageForm';
import MessageDisplay from './components/MessageDisplay';

function App() {
  // Lifting State includes creating it in a common parent that can pass data down to ALL
  //    components that will need access to the getter, setter or both
  const [currentMsg, setCurrentMsg] = useState("There are no messages");

  const getMsg = (newMessage) => {
    setCurrentMsg(newMessage);
  }

  return (
    <>
      {/* passing a function through props instead of vairable allways us to use it in MessageForm */}
      <MessageForm retreiveMsg = {getMsg}  />
      <MessageDisplay message={ currentMsg } />
    </>
  );
}

export default App;

