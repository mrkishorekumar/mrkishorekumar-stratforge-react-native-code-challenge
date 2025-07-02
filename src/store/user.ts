import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserData {
  name: string;
  imageUrl: string;
  email: string;
}

const initialState: UserData = {
  name: '',
  imageUrl: '',
  email: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<UserData>) => {
      state.name = action.payload.name;
      state.imageUrl = action.payload.imageUrl;
      state.email = action.payload.email;
    }
  },
});

export const { setUserData } = userSlice.actions;
export default userSlice.reducer;
