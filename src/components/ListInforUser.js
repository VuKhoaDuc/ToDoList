import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styled from "styled-components";

const WrapperContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;
const TextWarning = styled.span`
  font-size: 14px;
  color: #e50914;
  margin-top: 20px;
`;
const WrapperNameProduct = styled.div`
  width: 40%;
  /* align-items: center; */
  display: flex;
  margin-top: 30px;
  flex-direction: column;
  justify-content: flex-start;
`;
const NameProduct = styled.span`
  font-size: 15px;
  font-weight: normal;
  color: #000000;
  margin-top: 12px;
`;


const mapStateToProps = state => ({
  infor: state.infor,
  statusInput: state.statusInput,
});

const mapDispatchToProps = dispatch => ({

});



class ListInforUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notifiled: "Bấm lấy dữ liệu để hiển thị thông tin về nick name"
    };
  }

  render() {
    const { infor, statusInput } = this.props;
    const { isSuccess, user, error } = infor;

    if (statusInput.isChanging) {
      return (
        <WrapperContent>
          <TextWarning>Chờ nhập dữ liệu...</TextWarning>
        </WrapperContent>
      );
    }
    if (this.props.infor.isSuccess !== true) {
      return (
        <WrapperContent>
          <TextWarning>{this.state.notifiled}</TextWarning>
        </WrapperContent>
      );
    } else if (error) {
      return (
        <WrapperContent>
          <TextWarning>{`Error: ${error}`}</TextWarning>
        </WrapperContent>
      );
    } else if (isSuccess && !user.fullName) {
      return (
        <WrapperContent>
          <TextWarning>
            Chưa có thông tin nick name, vui lòng nhập nick name khác!
          </TextWarning>
        </WrapperContent>
      );
    }
    return (
      <WrapperContent>
        <WrapperNameProduct>
          <NameProduct>{`Họ và tên: ${user.fullName}`}</NameProduct>
          <NameProduct>{`Giới tính: ${user.gender}`}</NameProduct>
          <NameProduct>{`Email: ${user.email}`}</NameProduct>
        </WrapperNameProduct>
      </WrapperContent>
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
  // toggle: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListInforUser);
