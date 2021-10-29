import React from 'react'
import {Link} from 'react-router-dom'

function second(){
    return (
        <div>
            <h1>ini halaman Kedua</h1>
            <p>lorem ipsum ipsum</p>
            <p>lorem ipsum ipsum</p>
            <p>lorem ipsum ipsum</p>
            <p>lorem ipsum ipsum</p>
            <Link to='/'>Pindah Ke Halam Home</Link>
        </div>
    )
}

export default second