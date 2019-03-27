import React, { Component } from "react";
import styled from "styled-components";
import { IoIosAdd, IoIosTrash } from "react-icons/io";
import PropTypes from 'prop-types';


const BackgroundGradient = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100wh;
  height: 100vh;
  color: #fff;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  -webkit-animation: Gradient 15s ease infinite;
  -moz-animation: Gradient 15s ease infinite;
  animation: Gradient 15s ease infinite;

  @-webkit-keyframes Gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @-moz-keyframes Gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @keyframes Gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;
const Wrapper = styled.div`
  background-color: transparent;
  width: 90%;
  height: 86%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const WrapperTitle = styled.div`
  background-color: transparent;
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
`;
const Title = styled.text`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
`;
const WrapperToDoList = styled.div`
  background-color: whitesmoke;
  width: 100%;
  height: 80%;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 8px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;
const WrapperMakeTodo = styled.div`
  background-color: transparent;
  width: 50%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-bottom: 30px;
`;
const WrapperInputTodo = styled.div`
  display: flex;
  flex: 10;
  align-items: center;
  justify-content: center;
`;
const InputText = styled.input`
  border: 1px solid #ccc;
  width: 100%;
  height: 100%;
  padding: 12px 20px;
  box-sizing: border-box;
  font-size: 15px;
  font-weight: normal;
  border: 1px solid #ccc;
  border-radius: 4px 0px 0px 4px;
  outline: none;
  font-family: "Open Sans";
`;
const WrapperButtonTodo = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`;
const ButtonMakeTodo = styled.button`
  display: flex;
  flex-direction: row;
  height: 44px;
  width: 50px;
  outline: none;
  border-style: none;
  border-radius: 0px 4px 4px 0px;
  justify-content: center;
  align-items: center;
  color: #fff;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  -webkit-animation: Gradient 15s ease infinite;
  -moz-animation: Gradient 15s ease infinite;
  animation: Gradient 15s ease infinite;

  @-webkit-keyframes Gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @-moz-keyframes Gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @keyframes Gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;
const TextMake = styled.span`
  font-size: 24px;
  font-weight: normal;
  color: #ffffff;
  display: flex;
`;

const WrapperListItem = styled.div`
  background-color: transparent;
  width: 50%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  border-bottom: 1px black;
`;
const WrapperRim = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  color: #fff;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  -webkit-animation: Gradient 15s ease infinite;
  -moz-animation: Gradient 15s ease infinite;
  animation: Gradient 15s ease infinite;

  @-webkit-keyframes Gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @-moz-keyframes Gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @keyframes Gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;
const WrapperContentTodo = styled.div`
  display: flex;
  flex: 85;
  align-items: center;
  padding-left: 16px;
`;
const TextContent = styled.text`
  font-family: "Open Sans";
  font-size: 20px;
  font-weight: normal;
  color: black;
  display: flex;
`;
const WrapperButtonDelete = styled.div`
  display: flex;
  flex: 15;
  align-items: center;
  justify-content: center;
`;
const ButtonDelete = styled.button`
  display: flex;
  outline: none;
  border-style: none;
  border-radius: 0px 4px 4px 0px;
  justify-content: center;
  align-items: center;
  background-color: transparent
`;
const TextDelete = styled.span`
  font-size: 24px;
  font-weight: normal;
  color: black;
  display: flex;
`;

// Component
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.renderTodoItem = this.renderTodoItem.bind(this);
  }

  onClickAdd = () => {
    console.log("DucPushAdd")
  }

  onClickDelete = () => {
    console.log("DucPushDel")
  }

  renderTodoItem() {
    return (
      <WrapperListItem>
        <WrapperRim />
        <WrapperContentTodo>
          <TextContent>React JS vs Redux</TextContent>
        </WrapperContentTodo>
        <WrapperButtonDelete>
          <ButtonDelete>
            <TextDelete>
              <IoIosTrash />
            </TextDelete>
          </ButtonDelete>
        </WrapperButtonDelete>
      </WrapperListItem>
    );
  }

  render() {
    return (
      <BackgroundGradient>
        <Wrapper>
          <WrapperTitle>
            <Title>To do List </Title>
          </WrapperTitle>
          <WrapperToDoList>
            <WrapperMakeTodo>
              <WrapperInputTodo>
                <InputText />
              </WrapperInputTodo>
              <WrapperButtonTodo>
                <ButtonMakeTodo onClick={() => this.onClickAdd()}>
                  <TextMake>
                    <IoIosAdd />
                  </TextMake>
                </ButtonMakeTodo>
              </WrapperButtonTodo>
            </WrapperMakeTodo>
            {this.renderTodoItem()}
          </WrapperToDoList>
        </Wrapper>
      </BackgroundGradient>
    );
  }
}

TodoList.PropTypes = {};

export default TodoList;
