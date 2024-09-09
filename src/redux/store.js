import { configureStore, createAction } from "@reduxjs/toolkit";

export const deposit = createAction("balance/deposit");

// desopit(100)
// {type: "balance/deposit", payload: 100}

export const withdraw = createAction("balance/withdraw");

export const changeLang = createAction("locale/changeLang");

const initialState = {
  balance: {
    value: 500,
  },
  locale: {
    lang: "uk",
  },
};

// Алгоритм ініціалізаціії початкового стану
// 1. Перед монтування додатка Redux робить dispatch @@INIT
// 2. Стану не існує тому у параметр state передається undefined
// 3. Так як значення state буде undefined то викоритовується значення default param (початковий стан)
// 4. Редюсер не вміє обробляти @@INIT тому повертає поточне значення state, тобто початковий стан
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "balance/deposit":
      return {
        ...state,
        balance: {
          value: state.balance.value + action.payload,
        },
      };

    case "balance/withdraw":
      return {
        ...state,
        balance: {
          value: state.balance.value - action.payload,
        },
      };

    case "locale/changeLang":
      return {
        ...state,
        locale: {
          lang: action.payload,
        },
      };

    default:
      return state;
  }
};

export const store = configureStore({
  reducer: rootReducer,
});
