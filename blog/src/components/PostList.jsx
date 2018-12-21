import React from 'react';
import { connect } from 'react-redux';

import { fetchPostsAndUsers } from '../actions';
import Post from './Post';

class PostList extends React.Component{
    
    componentDidMount(){
        this.props.fetchPostsAndUsers(); 
    }

    renderPosts = () =>{
       return this.props.posts.map((post) =>{            
            return <Post key={post.id} post={post} />;
        });
    }
    render(){
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
    { fetchPostsAndUsers }
)(PostList);