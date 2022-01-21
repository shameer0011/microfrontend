import React, { useState, useEffect } from 'react'
import { getProducts } from './apis/products';
import { useDispatch, useSelector } from 'react-redux'
import { JSONS } from './redux/reducers/sampleReducer';
import axios from 'axios';
const HomeContent = () => {
    const dispatch = useDispatch()
    const state = useSelector(state => state.allProductReducer);
    const state2 = useSelector(state => state.jsonPlaceholder);
    console.log(state2, "stateeeeesss")


    useEffect(() => {
        getProductss()
    }, []);

    const getProductss = async () => {
        dispatch({ type: 'ALL_PRODUCTS', payload: await getProducts() })
    }
    return (
        <div>
            {state && state.map((prduct, key) => {
                return (
                    <>
                        <div id={key}>
                            <img src={prduct.image} style={{ width: "250px" }} />
                            <h3>{prduct.title}</h3>
                        </div>
                    </>
                )
            })}
        </div>
    )
}
export default HomeContent;
