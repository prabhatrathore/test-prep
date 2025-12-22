/**
 type of system design 
 1. high level design  ( HLD )
focus on component, interaction, architecture

 2. low-level design ( LLD ).
focus on classes, function, databases schema. 

 */

/**
🔷 What is Redux? (In Simple Words)
Redux is a state management library.

👉 redux stores application data (state) in one central place so:
Any UI component can access it
Data stays consistent
API data is easy to manage
-------------------------------------------------------------------------------------

Why Redux is Needed
Without Redux:
Props drilling
Multiple API calls
Data mismatch between components

With Redux:
// stores application data  in one central place
Clean data flow
Easy debugging

-------------------------------------------------------------------------------------
🔷 Redux Core Concepts (VERY IMPORTANT)
Redux has 5 main parts 👇

1️⃣ Store
📦 Central container that holds the entire app state

const store = configureStore({
  reducer: rootReducer
});
👉 Only one store per app.

2️⃣ State
📄 Actual data stored in Redux
Example:
{
  user: { id: 1, name: "Prabhat" },
  cart: [],
  loading: false
}
  3️⃣ Action

🧾 Plain JavaScript object that describes what happened

{
  type: "USER_LOGIN_SUCCESS",
  payload: userData
}
---------------------------------------------------------
👉 Actions do not change data directly

4️⃣ Reducer

⚙️ Pure function that updates the state

const userReducer = (state = {}, action) => {
  switch(action.type) {
    case "USER_LOGIN_SUCCESS":
      return action.payload;
    default:
      return state;
  }
};


👉 Reducer:
Takes old state
Takes action
Returns new state
---------------------------------------

5️⃣ Dispatch
🚀 Sends action to Redux

dispatch({ type: "LOGOUT" });
-------------------------------------------------------------------------------------

🔹 Important Redux Toolkit Components
1️⃣ configureStore

Creates store

import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    user: userReducer
  }
});
----------------------------------------

2️⃣ createSlice
Creates:
Reducer

Actions

const userSlice = createSlice({
  name: 'user',
  initialState: null,
  reducers: {
    setUser: (state, action) => action.payload,
    logout: () => null
  }
});

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;

3️⃣ Provider (UI Integration)

Connects Redux to React UI

import { Provider } from 'react-redux';

<Provider store={store}>
  <App />
</Provider>

4️⃣ useSelector

📥 Read data from store

const user = useSelector(state => state.user);

5️⃣ useDispatch

📤 Send actions

const dispatch = useDispatch();
dispatch(setUser(data));
-------------------------------------------------------------------------------------
🔷 What is React Query?

React Query fetches, caches, syncs, and updates API data automatically.
-------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------

*/