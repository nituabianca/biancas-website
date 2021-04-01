import React, { Component } from 'react'
import {HashLink as Link} from 'react-router-hash-link'
export default class Navbar extends Component {
    render() {
        return (
            <>
            <nav className="light-blue darken-4">
                <div className="container">
                    <div className="nav-wrapper">
                        <Link to="/" className="brand-logo">
                            CV
                        </Link>
                        <Link to="/" data-target="side-nav" className="slidenav-trigger"><i className="material-icons">menu</i>
                        </Link>
                    </div>
                </div>     
            </nav>   
            </>
        )
    }
}
