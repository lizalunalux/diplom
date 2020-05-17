import {Wheel} from "./component";
import {connect} from "react-redux";


export const mapStateToProps = (state) => {
    return {
        colorMethod: state.colorMethod,
        picker: state.picker
    };
};

export default connect(mapStateToProps)(Wheel);
