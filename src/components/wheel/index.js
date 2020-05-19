import {Wheel} from "./component";
import {connect} from "react-redux";
import {setColorsToSet} from "../../redux/actions/app";


export const mapStateToProps = (state) => {
    return {
        colorMethod: state.colorMethod,
        picker: state.picker
    };
};

export const mapDispatchToProps = (dispatch) => ({
    setColorsToSet: (props) => dispatch(setColorsToSet(props)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Wheel);
