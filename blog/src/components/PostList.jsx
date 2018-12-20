import React from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from '../actions';
import Post from './Post';

class PostList extends React.Component{
    
    componentDidMount(){
        this.props.fetchPosts(); 
    }

    renderPosts = () =>{
       return this.props.posts.map((post) =>{            
            return <Post key={post.id} post={post} />;
        });
    }
    render(){
        console.log(this.props.posts);
        return (
            <div className="ui relaxed divided list">
                {this.renderPosts()}
            </div>
        );
    };
}

const mapStateToProps = state => ({
    posts: state.posts
});

export default connect(
    mapStateToProps,
    { fetchPosts }
)(PostList);