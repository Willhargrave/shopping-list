import { Link } from "react-router-dom";
import React, { Component } from 'react';
import { useState, createContext, useContext } from "react";
import ItemContext from "./ItemContext";
const Navbar = () => {
    const [cartItems] = useContext(ItemContext)
    return (
        <div>
            <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse fixed-top">
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand" href="#">Sushi Server</a>

                <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to="/shopping-list">
                                <a className="nav-link">Home</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="shopping-list/Checkout">
                                <a className="nav-link">🛒{cartItems.length}</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="Github.com/willhargrave">Github</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
};

export default Navbar;
