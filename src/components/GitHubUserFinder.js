
import { Component } from 'react';

import Navbar from './Navbar';
import * as api from '../api/api'



export default class GitHubUserFinder extends Component {

    constructor(props) {
        super(props);
        this.state = { results: [] };
    }

    handleChange(e) {
        console.log(e)
        console.log(document.getElementById('username').value)
        api.getGitUser(document.getElementById('username').value).then(data => {
            console.log(data)
            this.setState({ results: data })
        })
    }

    render() {

        return (

            <>
                <Navbar />
                <main>

                    <div className="container">
                        <div className="form-floating mb-2 col-md-6">
                            <input type="text" className="form-control" id="username" onChange={(e) => this.handleChange(e)} />
                            <label htmlFor="username">GitHub Username</label>
                        </div>
                        <p><b>5,000 requests per hour</b></p>
                        <p>Name: {this.state.results.name}</p>
                        <p>Username: {this.state.results.login}</p>
                        <p>Location: {this.state.results.location}</p>
                    </div>

                </main>
            </>

        );
    }

}
