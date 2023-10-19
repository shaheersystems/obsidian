import React, { createContext, useState, useContext } from "react";

const ClusterContext = createContext();

const ClusterContextProvider = ({ children }) => {
  const [cluster, setCluster] = useState("");

  return (
    <ClusterContext.Provider value={{ cluster, setCluster }}>
      {children}
    </ClusterContext.Provider>
  );
};

export const useCluster = () => useContext(ClusterContext);

export default ClusterContextProvider;
