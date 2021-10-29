import React from 'react'
import {Link} from 'react-router-dom'

function Home(){
    return (
        <div>
            <h1>ini halaman utama</h1>
            <Link to='./second'>Pindah Ke Second</Link><br/>
            <Link to='./testbs'>Pindah Ke Bootsraps</Link>
        </div>
    )
}

export default Home