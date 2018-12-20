import { combineReducers } from 'redux';
import PostsReducer from './postsReducer';
import usersReducer from './usersReducer';

export default combineReducers({
    posts: PostsReducer,
    users: usersReducer
});