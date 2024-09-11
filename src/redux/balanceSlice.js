import { createSlice } from "@reduxjs/toolkit";

export const selectBalance = (state) => state.balance.value;

const slice = createSlice({
  name: "balance",
  initialState: {
    value: 500,
  },
  reducers: {
    deposit: (state, action) => {
      state.value += action.payload;
    },
    withdraw: (state, action) => {
      state.value -= action.payload;
    },
  },
});

export const { deposit, withdraw } = slice.actions;

export default slice.reducer;

// export const deposit = createAction("balance/deposit");

// export const withdraw = createAction("balance/withdraw");

// export default function balanceReducer(state = { value: 500 }, action) {
//   switch (action.type) {
//     case "balance/deposit":
//       return {
//         ...state,
//         value: state.value + action.payload,
//       };

//     case "balance/withdraw":
//       return {
//         ...state,
//         value: state.value - action.payload,
//       };

//     default:
//       return state;
//   }
// }
