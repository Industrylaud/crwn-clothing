import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type Category = {
    title: string,
    items: any
}

export const CATEGORIES_INITIAL_STATE = {
    categories: new Array<Category>,
};

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState: CATEGORIES_INITIAL_STATE,
    reducers: {
        setCategories: (state, action: PayloadAction<Array<Category>>) => {
            state.categories = action.payload;
        },
    },
});

export const {setCategories} = categoriesSlice.actions;

export const categoriesReducer = categoriesSlice.reducer;
