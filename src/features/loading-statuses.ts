import { ActionReducerMapBuilder, AsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { fetchPronouns } from './pronouns';
import { fetchUser } from './user';

export enum LoadingKey {
    Pronouns,
    User,
}

export enum LoadingStatus {
    LOADING,
    COMPLETE,
    ERROR,
}

export type LoadingStatusesState = Record<LoadingKey, LoadingStatus>;

export const loadingStatusesSlice = createSlice({
    name: 'loadingStatuses',
    initialState: {
        [LoadingKey.Pronouns]: LoadingStatus.LOADING,
        [LoadingKey.User]: LoadingStatus.LOADING
    } as LoadingStatusesState,
    reducers: {
        setLoadingStatuses: (state, action: PayloadAction<Partial<LoadingStatusesState>>) => {
            return {
                ...state,
                ...action.payload
            };
        }
    },
    extraReducers: (builder) => {
        LoadingStatusCases(builder, LoadingKey.Pronouns, fetchPronouns);
        LoadingStatusCases(builder, LoadingKey.User, fetchUser);
    }
});

export const { setLoadingStatuses } = loadingStatusesSlice.actions;

export const selectLoadingStatuses = (state: RootState) => state.loadingStatuses;
export const selectLoadingStatus = (key: LoadingKey) => (state: RootState) => selectLoadingStatuses(state)[key];
export const isLoading = (key: LoadingKey) => (state: RootState) => selectLoadingStatus(key)(state) === LoadingStatus.LOADING;
export const areAnyLoading = (keys: LoadingKey[]) => (state: RootState) => keys.some((key) => isLoading(key)(state));

export const loadingStatusesReducer = loadingStatusesSlice.reducer;

export function LoadingStatusCases(builder: ActionReducerMapBuilder<LoadingStatusesState>, key: LoadingKey, thunk: AsyncThunk<unknown, void, unknown>) {
    builder.addCase(thunk.pending, LoadingStatusCase(key, LoadingStatus.LOADING));
    builder.addCase(thunk.fulfilled, LoadingStatusCase(key, LoadingStatus.COMPLETE));
    builder.addCase(thunk.rejected, LoadingStatusCase(key, LoadingStatus.ERROR));
}

export function LoadingStatusCase(key: LoadingKey, status: LoadingStatus) {
    return (state: LoadingStatusesState) => ({
        ...state,
        [key]: status
    });
}