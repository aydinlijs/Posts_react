import React from 'react';
import Posts from './Posts/Posts';
import './App.css';


class App extends React.Component {
    state = {
        posts: [

        ],
        isLoading: true
    }

    async fetchPosts() {
        await fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => this.setState({
                posts: data,
                isLoading: false
            }));
    }

    componentDidMount(){
         this.fetchPosts();   
    }

    render() {
        return (
            <div className="b-container">
                <Posts loading={this.state.isLoading} list={this.state.posts}/>
            </div>
        )
    }
}

export default App;