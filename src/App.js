
import { Component } from 'react';

import { Route } from 'react-router-dom';
import Home from './components/Home';
import GitHubUserFinder from './components/GitHubUserFinder';

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <Route path="/" exact component={Home} />
                <Route path="/GithubUserFinder" exact component={GitHubUserFinder} />
            </div>
        );
    }
}
