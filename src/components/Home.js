
import { Component } from 'react';

import Navbar from './Navbar';

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {  };
    }

    render() {
        return (

            <>
                <Navbar />
                <main>

                    <div className="container">
                        <p>Hello World</p>
                    </div>

                </main>
            </>

        );
    }
}
