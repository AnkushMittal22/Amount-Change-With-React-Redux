const { createSlice, configureStore } = require("@reduxjs/toolkit");

const initialValue = { withdraw: 19000, isValid1: false, isValid2: false };

const sliceReducer = createSlice({
  name: "withdraw",
  initialState: initialValue,
  reducers: {
    withdrawOne(state, action) {
      if (state.withdraw <= 10000) {
        state.isValid1 = true;
      } else {
        state.withdraw = state.withdraw - action.payload;
      }
    },
    withdrawTwo(state, action) {
      if (state.withdraw <= 5000) {
        state.isValid1 = true;
        state.isValid2 = true;
      } else {
        state.withdraw = state.withdraw - action.payload;
      }
    },
  },
});

const store = configureStore({
  reducer: sliceReducer.reducer,
});

export const actionTaker = sliceReducer.actions;
export default store;
