import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actions as tempActions } from "../store/modules/actionsDuck";
import { actions as userAction } from "../store/modules/usersDuck";
import styled from "styled-components";
import ListInforUser from "../components/ListInforUser";


const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const WrapperTitle = styled.div`
  width: 50%;
  margin-top: 40px;
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Title = styled.span`
  font-size: 18px;
  font-weight: bold;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 40%;
  padding-top: 10px;
  padding-bottom: 10px;
  justify-content: flex-start;
  align-items: center;
  margin-top: 20px;
`;

const Label = styled.label`
  font-size: 15px;
  color: #000;
  width: 120px;
`;
const InputText = styled.input`
  border: 1px solid #ccc;
  width: 60%;
  padding: 12px 20px;
  /* margin: 8px 0; */
  box-sizing: border-box;
  font-size: 15px;
  font-weight: normal;
  outline: none;
`;
const ComponentButton = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`;
const Button = styled.button`
  display: flex;
  flex-direction: row;
  height: 30px;
  background-color: #1890ff;
  color: #ffffff;
  padding-left: 10px;
  padding-right: 10px;
  margin-right: 10px;
  border-style: none;
  border-radius: 3px 3px 3px 3px;
  justify-content: center;
  align-items: center;
  outline-color: wheat;

  animation: shake-animation 3.72s ease infinite;
  transform-origin: 50% 50%;

  @keyframes shake-animation {
    0% {
      transform: translate(0, 0);
    }
    1.78571% {
      transform: translate(5px, 0);
    }
    3.57143% {
      transform: translate(0, 0);
    }
    5.35714% {
      transform: translate(5px, 0);
    }
    7.14286% {
      transform: translate(0, 0);
    }
    8.92857% {
      transform: translate(5px, 0);
    }
    10.71429% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(0, 0);
    }
  }
`;
const TextAdd = styled.span`
  font-size: 14px;
  font-weight: normal;
  color: #ffffff;
  display: flex;
`;

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...tempActions, ...userAction }, dispatch)
});


class AddNickName extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputNode: ""
    };
  }

  onClickGetData = () => {

    this.props.actions.getDataBackend(this.state.inputNode);
  };

  onChange = event => {
    // dispatch(getDataBackend(nickname));
    this.setState({
      inputNode: event.target.value
    })
    this.props.actions.typeChangeInput(event.target.value);
    this.props.actions.resetState();
    // console.log("dddd", event.target.value)
  };

  onBlur = () => {
    this.props.actions.resetInput();
  };
  render() {
    return (
      <Container>
        <WrapperTitle>
          <Title>Tìm kiếm thông tin người dùng</Title>
        </WrapperTitle>
        <Wrapper>
          <Label>Nickname</Label>
          <InputText
            // ref={node => (this.state.inputNode = node)}
            placeholder="Nhập tên"
           
            onChange={this.onChange}
            onBlur={() => this.onBlur}
          />
        </Wrapper>
        <ComponentButton>
          <Button onClick={() => this.onClickGetData()}>
            <TextAdd>Tìm kiếm</TextAdd>
          </Button>
        </ComponentButton>

        <ListInforUser />
      </Container>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(AddNickName);
