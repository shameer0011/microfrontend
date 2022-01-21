import React from 'react'

const header = ({ app }) => {
    return (
        <div style={{ border: "1px solid", backgroundColor: "blue" }}>
            {app?.name}
        </div>
    )
}

export default header
