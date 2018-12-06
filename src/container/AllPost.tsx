import { connect } from "react-redux";
import AllPost  from '../component/AllPost';
import { State } from "../reducer/PostReducer";

const mapStateToProps = (state: State) => {
    return {
        posts: state.post
    }
}
export default connect(mapStateToProps)(AllPost);