import { get, post } from './../core/api/index';

export const getProducts = async () => {
    const url = 'http://localhost:3000/courses'   ////from backend API , wecan use diffrent host on frontend url
    return await get(url)
}

export const getProductsById = async (id) => {
    const url = 'http://localhost:3000/courses/{id}'  //from backend API , wecan use diffrent host on frontend url
    return await get(url.replace("{id}", id));
}

export const postProducts = async (data) => {
    const url = 'http://localhost:3000/courses';  //from backend API , wecan use diffrent host on frontend url
    return await post(url, data)

}
