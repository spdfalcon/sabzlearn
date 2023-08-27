import React from 'react'
import './Header.css'
import Topbar from '../Topbar/Topbar'
import Navbar from '../Navbar/Navbar'
export default function Header() {
    return (
        <>
            <header class="header">
                <Topbar></Topbar>

                <Navbar></Navbar>
            </header>
        </>
    )
}
