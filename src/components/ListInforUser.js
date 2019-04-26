import React, { Component } from "react";
import PropTypes from "prop-types";

export default class ListInforUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notifiled: "Bấm lấy dữ liệu để hiển thị thông tin về nick name"
    };
  }

  render() {
    console.log("props: ", this.props);
    const { infor, statusInput } = this.props;
    const { isSuccess, user, error } = infor;

    if (statusInput.isChanging) {
      return <span>Cho Nhap Du Lieu</span>;
    }
    if (this.props.infor.isSuccess !== true) {
      return <span>{this.state.notifiled}</span>;
    } else if (error) {
      return <span>{`Error: ${error}`}</span>;
    } else if (isSuccess && !user.fullName) {
      return (
        <span>Chưa có thông tin nick name, vui lòng nhập nick name khác!</span>
      );
    } 
    return (
      <ul>
        <li>{`Họ và tên: ${user.fullName}`}</li>
        <li>{`Giới tính: ${user.gender}`}</li>
        <li>{`Email: ${user.email}`}</li>
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
