import React, { Component } from 'react';
import Header from '../components/Header/Header';
import { Link } from 'react-router-dom';
import Nav from "../components/Nav/Nav";

export default class HomePage extends Component {
    state = {
        // state stuff
    }

    render() {
        return (
            <>
            <Nav />
            <Header headerText="Landing Page">
                <div>
                    <h2>Hello World</h2>
                </div>
                <Link to="/new-user">
                    <button type="button" className="btn btn-primary">
                        Sign Up!
                    </button>
                </Link>
                <Link to="/create-clan">
                    <button type="button" className="btn btn-primary">
                        Make Clan
                    </button>
                </Link>
            </Header>
            </>

        )
    }
}