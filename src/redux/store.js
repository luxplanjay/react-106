import { configureStore } from "@reduxjs/toolkit";
import { tasksReducer } from "./tasksSlice";
import { filtersReducer } from "./filtersSlice";

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filtersReducer,
    // test: {
    //   a: 5,
    //   b: 10,
    // },
  },
});

// const selectA = (state) => state.test.a;

// const selectB = (state) => state.test.b;

// const selectSum = (state) => {
//   const a = selectA(state);
//   const b = selectB(state);
//   return a + b;
// }

// const MyComponent = () => {
//   // const a = useSelector(selectA)
//   // const b = useSelector(selectB)

//   // const sum = a + b;

//   const sum = useSelector(selectSum);

//   return <div>{sum}</div>
// }
