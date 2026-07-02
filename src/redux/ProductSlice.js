import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
    "products",
    async () => {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        console.log(data);
        return data;
    }
);

const initialState = {
    items: [],
    status: undefined,
    error: null
}

 const productsSlice = createSlice({
    name: 'productsSlice',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.status = "Succeeded",
                state.items = action.items
        })
    }

})


export default productsSlice.reducer
