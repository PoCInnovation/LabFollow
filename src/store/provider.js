import React, { useState } from "react";
import PackageContext from "./context";

const provider = props => {
  const [token, setToken] = useState("");
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [doctors, setDoctors] = useState([]);
  const [surveys, setSurveys] = useState([]);

  return (
    <PackageContext.Provider
      value={{
        token,
        id,
        name,
        email,
        doctors,
        surveys,
        updateToken: setToken,
        updateId: setId,
        updateName: setName,
        updateEmail: setEmail,
        updateDoctor: setDoctors,
        updateSurveys: setSurveys,
      }}
    >
      {props.children}
    </PackageContext.Provider>
  );
};

export default provider;
