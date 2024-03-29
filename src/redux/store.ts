import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "./api/userApi";
import { userReducer } from "./reducer/userReducer";
import { productApi } from "./api/productApi";
import { productReducer } from "./reducer/cartReducer";
import { orderApi } from "./api/orderApi";
import { dashboardApi } from "./api/dashboardApi";

export const server = import.meta.env.VITE_SERVER_API;

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [orderApi.reducerPath]: orderApi.reducer,
    [dashboardApi.reducerPath]: dashboardApi.reducer,
    [userReducer.name]: userReducer.reducer,
    [productReducer.name]: productReducer.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .prepend(userApi.middleware)
      .prepend(productApi.middleware)
      .prepend(orderApi.middleware)
      .prepend(dashboardApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
