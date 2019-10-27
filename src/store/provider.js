import React, { useState } from "react";
import PackageContext from "./context";

const provider = props => {
  const [state, setState] = useState({
    token: "",
    name: "",
    email: "",
  });

  return (
    <PackageContext.Provider
      value={{
        data: state,
        updateToken: (newToken) => {
          setState({ ...state, token: newToken });
        },
        updateName: (newName) => {
          setState({ ...state, mame: newName });
        },
        updateEmail: (newEmail) => {
          setState({ ...state, Email: newEmail });
        },
      }}
    >
      {props.children}
    </PackageContext.Provider>
  );
};

export default provider;
