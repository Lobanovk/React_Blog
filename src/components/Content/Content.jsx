import React, {Component} from 'react';
import './Content.css'

export default class Content extends Component {
    render() {
        const {children} = this.props;
        return (
            <div className="container-blog content">
                {children}
            </div>
        )
    }
}