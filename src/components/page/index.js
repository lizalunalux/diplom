import {connect} from "react-redux";
import {Page} from "./component";

export const mapStateToProps = (state) => {
    return {
        colorsToSet: state.colorsToSet
    };
};

export default connect(mapStateToProps)(Page);
