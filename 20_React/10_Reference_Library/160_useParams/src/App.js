import React from "react";
import {BrowserRouter,Link,Routes,Route} from "react-router-dom";
import {useParams} from 'react-router-dom'

const Location = (props) => {
  const {city} = useParams();
  return (
    <h1>Welcome to {city}!</h1>
  );
}

function App() {
  return (
    <BrowserRouter>
      <p>
        <Link to="/location/seattle">Seattle</Link>
        |
        <Link to="/location/chicago">Chicago</Link>
        |
        <Link to="/location/burbank">Burbank</Link>
      </p>
      <Routes>
        {/* :city is similar to a variable placeholder in flask app <int:userID> */}
        <Route path="/location/:city" element={<Location />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
