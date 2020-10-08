import React, {Component} from 'react';
import Post from './Post';

export default class Posts extends Component {
    render() {
        const {allPosts} = this.props;
        return (
            <div>
                {allPosts &&
                    allPosts.map((item) => <Post key={item.id} title={item.title} body={item.body} />).splice(0, 15)}
            </div>
        );
    }
}
