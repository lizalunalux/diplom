import {Branding} from "./component";
import {connect} from "react-redux";


export const mapStateToProps = (state) => {
    return {
        svgPaths: state.svgPaths,
        colorsToSet: state.colorsToSet
    };
};

export default connect(mapStateToProps)(Branding);
