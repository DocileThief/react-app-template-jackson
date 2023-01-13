import {Link, Routes, Route} from 'react-router-dom';

import Home from "./pages/Home";
import Info from "./pages/Info";

function App() {
  return (
    <div className="App">
          <Link to="Home">
                <p> Home </p>
          </Link>
          <Link to="Info">
                <p> Info </p>
          </Link>
          {/* anything above this line is going to be your navbar. the <link to>s act as <a> elements, so if you want to add css on the, reference them as <a> */}
          <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/info" element={<Info />}/>
          {/*
          / is just the your_domain.com/
          /* is any page that is not specified, make sure to put the error page at the bottom
          /page_name will direct you to the specified page
          */}
          </Routes>
         
    </div>
  );
}

export default App