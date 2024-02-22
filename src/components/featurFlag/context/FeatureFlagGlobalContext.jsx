import FeatureFlagDataServiceCall from "../data";
import { createContext, useEffect } from "react";
import { useState } from "react";

// A Feature Flag Global Context is a design pattern used in software development to manage and
// control the visibility of specific features or functionalities within an application.
// It leverages the React Context API to provide a centralized way of handling feature flags
// across different components.

//Here's the implementation =
//                          =
//                          v
export const FeatureFlagContext = createContext(null);
export default function FeatureFlagGlobalContext({ children }) {
  const [loading, setLoading] = useState(false);
  const [enableFlag, setEnableFlag] = useState({});

  async function fetchFeatureFlags() {
    try {
      setLoading(true);
      const response = await FeatureFlagDataServiceCall();
      setEnableFlag(response);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
      throw new Error(error);
    }
  }

  useEffect(() => {
    fetchFeatureFlags();
  }, []);

  return (
    <FeatureFlagContext.Provider value={{ loading, enableFlag }}>
      {children}
    </FeatureFlagContext.Provider>
  );
}
