import { connect } from "react-redux";
import { toggle } from "../actions";
import ListInforUser from "../components/ListInforUser";
import { VisibilityFilters } from "../actions";

const getVisibleInforUserList = (infor, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return infor;
    case VisibilityFilters.SHOW_COMPLETED:
      return infor.filter(t => t.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return infor.filter(t => !t.completed);
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

const mapStateToProps = state => ({
  infor: getVisibleInforUserList(state.infor, state.visibilityFilter)
});

const mapDispatchToProps = dispatch => ({
  toggle: id => dispatch(toggle(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListInforUser);
