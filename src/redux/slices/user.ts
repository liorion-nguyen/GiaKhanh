import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user: null,
    users: [],
    userDetail: null
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
        setUserDetail: (state, actions) => {
            state.userDetail = actions.payload;
        },
    }
});

export const { setUser, setUsers, setUserDetail } = userSlice.actions;
export default userSlice.reducer;