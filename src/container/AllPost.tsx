import { connect } from "react-redux";
import AllPost  from '../component/AllPost';
import { State } from "../reducer/PostReducer";

const mapStateToProps = (state: State) => {
    return {
        post: state.post
    }
}
const AllPostContainer = connect(mapStateToProps, null)(AllPost);
export default AllPostContainer