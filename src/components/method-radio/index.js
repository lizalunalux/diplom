import {MethodRadio} from "./component";
import {connect} from "react-redux";
import {setColorMethodAction} from "../../redux/actions/app";

export const mapDispatchToProps = (dispatch) => ({
    setColorMethod: (props) => dispatch(setColorMethodAction(props)),
});

export default connect(
    null,
    mapDispatchToProps
)(MethodRadio);
