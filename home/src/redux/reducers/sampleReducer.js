
export const ALL_PRODUCTS = "ALL_PRODUCTS";

const totalLists = [];

export const allProductReducer = (state = totalLists, action) => {
    switch (action.type) {
        case ALL_PRODUCTS:
            console.log(action.payload, "reducer")
            return state = [...state, ...action.payload]

        default:
            return state;
    }
}


const total = [];
export const JSONS = "JSONS"
export const jsonPlaceholder = (state = total, action) => {
    switch (action.type) {
        case JSONS:
            console.log(action.payload, "reducer")
            return state = [...state, action.payload]

        default:
            return state;
    }
}
