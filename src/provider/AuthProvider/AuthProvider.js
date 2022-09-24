const initialState = {
  userData: null,
};

export const AuthProvider = (state = initialState, action) => {
  switch (action.type) {
    case "setAuth": {
      const authData = { ...state };
      authData.userData = action.payload;
      return { userData: authData.userData };
    }
    case "clearAuth": {
      const authData = { ...state };
      authData.userData = null;
      return { userData: authData.userData };
    }
    default: {
      return state;
    }
  }
};
