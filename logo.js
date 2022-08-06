import React, { Component } from 'react';

import Logo from './logo';
import SearchBar from './searchBar';

class Results extends Component {
    render() {
        const size= {
            heigt: this.props.size ? this.props.size : 105,
            wodth: this.props.size ? this.props.size: 105
        }
        return {
            <div className="logo-main">
                <img styles={size} alt="daily smarty ui image logo big" src="/assets/ds_circle_logo.png"/>
            </div>
        }
    }
}

export default Logo;