import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import wretch from 'wretch';
import { Pronouns } from '@prisma/client';

export type PronounsState = Pronouns[];

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const fetchPronouns = createAsyncThunk(
    'pronouns/fetchPronouns',
    async () => {
        return await wretch('/api/pronouns').get().json() as PronounsState;
    }
);

export const pronounsSlice = createSlice({
    name: 'pronouns',
    initialState: [] as PronounsState,
    reducers: {
        updatePronouns: (state, action: PayloadAction<PronounsState>) => action.payload
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPronouns.fulfilled, (state, action) => {
            return action.payload;
        })
    }
});

export const { updatePronouns } = pronounsSlice.actions;

export const selectAllPronouns = (state: RootState) => state.pronouns;
// export const selectPronouns = (ids: number[]) => (state: RootState) => selectAllPronouns(state).filter(({ id }) => ids.includes(id));
export const selectPronouns = (ids: number[], limit: number = 3) => (state: RootState) => {
    const pronounsList = selectAllPronouns(state);

    return ids.slice(0, limit).map((id) => {
        return pronounsList.find((pronouns) => pronouns.id === id);
    }).filter(Boolean);
};

export const pronounsReducer = pronounsSlice.reducer;