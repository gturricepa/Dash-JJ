
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  name: string | null;
  type: 'DataViz' | 'Report' | null;
}

const initialState: UserState = {
  name: null,
  type: null
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setName(state, action: PayloadAction<string| null>) {
      state.name = action.payload;
    },
    setType(state, action: PayloadAction<'DataViz' | 'Report' | null>) {
      state.type = action.payload;
    }
  }
});

export const { setName, setType } = userSlice.actions;
export default userSlice.reducer;
