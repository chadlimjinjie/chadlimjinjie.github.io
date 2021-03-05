
import { Component } from 'react';

import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <header className="mb-3">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">Chad Lim</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                <Link className="nav-link" to="GitHubUserFinder">GitHub User Finder</Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}
