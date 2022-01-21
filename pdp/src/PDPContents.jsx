import React, { useState, useEffect } from 'react'
import { getProductsById } from 'home/products'
import { useParams } from 'react-router-dom'
import { getAllUTasks } from 'home/tasks'
const PDPContents = () => {
    const [dispalyProduct, setDispalyProducts] = useState([]);
    console.log(dispalyProduct, "dispaly productrsss")
    const { id } = useParams()
    useEffect(() => {
        getProductId(id)
    }, [id])

    const getProductId = async (id) => {
        const tasks = await getAllUTasks();
        console.log(tasks, "fullm tasks")
        const displayDetails = await getProductsById(id)
        setDispalyProducts(displayDetails)
    }
    return (
        <div>
            {"product details"}<br />
            <div>
                <img src={dispalyProduct?.image} style={{ width: 250 }} />
            </div>
            <div>
                {dispalyProduct?.title}
            </div>

        </div >
    )
}

export default PDPContents
