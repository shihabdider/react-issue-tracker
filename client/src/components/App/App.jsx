import React from "react";

import Routes from "./Routes";
import Toast from "./Toast";
import NormalizeStyles from "./NormalizeStyles";
import FontStyles from "./FontStyles";
import BaseStyles from "./BaseStyles";

//  <BaseStyles />
const App = () => (
  <>
    <Routes />
    <NormalizeStyles />
    <FontStyles />
    <BaseStyles />
    <Toast />
  </>
);

export default App;
