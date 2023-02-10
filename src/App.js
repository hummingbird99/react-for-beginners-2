import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home ";
import Detail from "./routes/Detail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={process.env.PUBLIC_URL + "/"} element={<Home />} />
        <Route path="/movie/:id" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;

// import React from "react";
// import {
//   RouterProvider,
//   createBrowserRouter,
//   createRoutesFromElements,
//   Routes,
//   Route,
// } from "react-router-dom";
// import Detail from "./routes/Detail";
// import Home from "./routes/Home";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/movie" element={<Detail />} />
//     </Routes>
//   )
// );

// function App() {
//   return <RouterProvider router={router} />;
// }

// export default App;
