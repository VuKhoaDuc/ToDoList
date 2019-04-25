import React from "react";
import Footer from "./Footer";
import AddNickname from "../containers/AddNickname";
import ListInforUser from "../containers/VisibleInforUserList";

const App = () => (
  <div>
    <AddNickname />
    <ListInforUser />
    {/* <Footer /> */}
  </div>
);

export default App;
