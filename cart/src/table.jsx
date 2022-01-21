import React from 'react'
import { Table, Tag, Space } from 'antd';
const table = (props) => {
    const { totalDetails } = props;

    const dataSource = totalDetails && totalDetails.map((item, key) => {
        return {
            key: key,
            id: item.id,
            title: item.title,
            image: item.image
        }
    })
    const columns = [
        {
            title: 'id',
            dataIndex: 'id',
            key: 'name',
        },
        {
            title: 'title',
            dataIndex: 'title',
            key: 'age',
        },

        {
            title: 'image',
            dataIndex: 'image',
            key: 'address',
        },
    ];
    return (
        <div>

            <Table dataSource={dataSource} columns={columns} />;
        </div>
    )
}

export default table
