import React, {Component} from 'react';
import Post from './Post';
import './style.css';

export default class Posts extends Component {
    render() {
        const {allPosts} = this.props;
        return (
            <div>
                <div className="searchComp">
                    <input className="search" placeholder="Enter your text..." />
                    <input className="searchSubmit" type="submit" value="Seacrh" />
                </div>
                {allPosts &&
                    allPosts.map((item) => <Post key={item.id} title={item.title} body={item.body} />).splice(0, 15)}
            </div>
        );
    }
}
