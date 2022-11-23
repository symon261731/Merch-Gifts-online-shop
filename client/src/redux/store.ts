import { configureStore } from '@reduxjs/toolkit'

import requestReducer from './reducers/requestReducer'

export const store = configureStore({
  reducer: {
    request: requestReducer
  }
})
