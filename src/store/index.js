import React from "react";

export const reducer = (state = [], action) => {
  switch (action.type) {
    case actions.UPDATE_STATE:
      state = JSON.parse(JSON.stringify(action.item));
      return state;
    default:
      return state;
  }
};

export const initialState = {
  date: {
    day: "",
    month: "",
    year: "",
  },
  companyName: "",
  amount: "",
  currency: "",
  sourceCodename: "",
  isTrustedSource: "",
  message: "",
  success: false,
};

export const CustomContext = React.createContext();

const actions = {
  UPDATE_STATE: "UPDATE_STATE",
};

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = {
    state,
    updateState: (item) => {
      dispatch({ type: actions.UPDATE_STATE, item });
    },
  };

  return (
    <CustomContext.Provider value={value}>{children}</CustomContext.Provider>
  );
};
