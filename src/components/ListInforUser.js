import React, { Component } from "react";
import PropTypes from "prop-types";


export default class ListInforUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notifiled: "Bấm lấy dữ liệu để hiển thị thông tin về nick name"
    }
  }

  render() {
    console.log("props: ", this.props);
    if (this.props.infor.isSuccess !== true) {
      return (<span>{this.state.notifiled}</span>);
    } else if (this.props.infor.isHaveError === true) {
      return (<span>{`Error: ${this.props.infor.error}`}</span>)
    } else if (this.props.infor.user === undefined) {
      return (<span>Chưa có thông tin nick name, vui lòng nhập nick name khác!</span>)
    }
    return (
      <ul>
        <li>{`Họ và tên: ${this.props.infor.user.fullName}`}</li>
        <li>{`Giới tính: ${this.props.infor.user.gender}`}</li>
        <li>{`Email: ${this.props.infor.user.email}`}</li>
      </ul>
    );
   
  }
}

ListInforUser.propTypes = {
  infor: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  toggle: PropTypes.func.isRequired
};
