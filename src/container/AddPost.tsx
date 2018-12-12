import { connect } from "react-redux";
import { addPost } from '../actions/PostAction'
import PostForm from '../component/PostForm';

const AddPostContainer = connect(null,{
    onAdd: addPost
})(PostForm)

export default AddPostContainer