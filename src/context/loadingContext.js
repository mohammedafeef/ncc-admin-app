import React, { createContext, useState } from "react";
const loadingContext = createContext();
export default loadingContext;
export function LoadingProvider(props) {
  const [isLoading, setIsLoading] = useState(false);
  const loaderToggler = (state) => setIsLoading(state);
  return (
    <loadingContext.Provider value={{ isLoading, loaderToggler }}>
      {props.children}
    </loadingContext.Provider>
  );
}
