import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user: null,
    users: []
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, actions) => {
            state.user = actions.payload;
        },
        setUsers: (state, actions) => {
            state.users = actions.payload;
        },
    }
});

export const { setUser, setUsers } = userSlice.actions;
export default userSlice.reducer;