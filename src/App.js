import React, {Component} from 'react';

import Header from './Components/Header'
import Routing from './Routing'


export default class extends Component {


    render() {


        return (
            <div>
                <Header />

                <Routing />

            </div>
        );
    }
}