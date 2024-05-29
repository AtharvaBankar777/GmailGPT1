// // import { Routes, Route } from "react-router-dom";
// // import { routes1 } from "./routeF/routes";
// // import Viewemail from "./components/Viewemail";
// // import Main from "./pages/Main";
// // import Emails from "./components/Emails";

// // function App() {
// //   return (
// //     <Routes>
// //       <Route path={routes1.main.path} element={<Main />}>
// //         <Route path={routes1.emails.path} element={<Emails />}></Route>
// //         <Route path={routes1.view.path} element={<Viewemail />}></Route>
// //       </Route>
// //     </Routes>
// //   );
// // }

// // export default App;

import { Routes, Route, Navigate } from "react-router-dom";
import { routes1 } from "./routeF/routes";
import ErrorComponent from "./components/common/ErrorComponents";
import Viewemail from "./components/Viewemail";
import Main from "./pages/Main";
import Emails from "./components/Emails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/emails/inbox" />} />
      <Route path={routes1.main.path} element={<Main />}>
        <Route path="emails" element={<Navigate to="emails/inbox" />} />
        {/* <Route path={routes1.emails.path} element={<Emails />} /> */}
        {/* <Route path={routes1.view.path} element={<Viewemail />} /> */}
        <Route path="/emails/:type" element={<Emails />} />

        {/* <Route path="/view/:type" element={<Viewemail />} /> */}
        <Route path="/view" element={<Viewemail />} />
        <Route path={routes1.invalid.path} element={<ErrorComponent />} />
      </Route>
    </Routes>
  );
}

export default App;
