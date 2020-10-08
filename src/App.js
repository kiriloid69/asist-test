import React, {Component} from 'react';
import Header from './components/Header';
import Posts from './components/Posts/Posts';
import Photos from './components/Photos/Photos';
import Albums from './components/Albums/Albums';
import {getData} from './API/get-action';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allPosts: [],
            allPhotos: [],
            allAlbums: []
        };
    }

    componentDidMount() {
        const {allPosts, allPhotos, allAlbums} = this.state;
        getData('/posts', allPosts).then((json) =>
            this.setState({
                allPosts: [...json]
            })
        );
        getData('/photos', allPhotos).then((json) =>
            this.setState({
                allPhotos: [...json]
            })
        );
        getData('/albums', allAlbums).then((json) =>
            this.setState({
                allAlbums: [...json]
            })
        );
    }

    render() {
        return (
            <div className="App">
                <div className="Container">
                    <Header />
                    <Router>
                        <Route exact path="/" render={(props) => <Posts {...props} allPosts={this.state.allPosts} />} />
                        <Route
                            exact
                            path="/photos"
                            render={(props) => <Photos {...props} allPhotos={this.state.allPhotos} />}
                        />
                        <Route exact path="/albums" render={(props) => <Albums {...props} allAlbums={this.state.allAlbums} />} />
                    </Router>
                </div>
            </div>
            // <Route exact path="/props-through-render" render={(props) => <PropsPage {...props} title={`Props through render`} />} />
            // <Posts allPosts={this.state.allPosts} />}
        );
    }
}

export default App;
