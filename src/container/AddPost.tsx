import { connect } from "react-redux";
import { addPost } from '../actions/PostAction'
import PostForm from '../component/PostForm';

export default connect(null,{
    onAdd: addPost
})(PostForm)