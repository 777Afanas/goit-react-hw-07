import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "@reduxjs/toolkit";
import { filtersReducer } from "./filtersSlice";


// const contactsPersistConfig = {
//   key: "contacts",
//   storage,
// };

// const persistedContactsReducer = persistReducer(
//   contactsPersistConfig,
//   contactsReducer
// );

// export const store = configureStore({
//   reducer: {
//     contacts: persistedContactsReducer,
//     filters: filtersReducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export const persistor = persistStore(store);