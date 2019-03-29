import React, { Component } from 'react';
import TodoItem from './TodoItem';
import './App.css';
import {
    Button, Menu, Dropdown, Icon,
} from 'antd';

class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {
            list: [],
            inputValue: ''
        }
        this.handleInputValue = this.handleInputValue.bind(this);
        this.handleAddItem = this.handleAddItem.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleMenuClick = this.handleMenuClick.bind(this);
        // const menu =(
        //     <Menu onClick={this.handleMenuClick}>
        //         <Menu.Item key={"1"}>One</Menu.Item>
        //         <Menu.Item key={"2"}>Two</Menu.Item>
        //         <Menu.Item key={"3"}>Three</Menu.Item>
        //     </Menu>
        // );
    }
  render() {
    return (
        <React.Fragment>
            <div>
                <input onChange={this.handleInputValue} value={this.state.inputValue}></input>
            </div>
            <div style={{background:'rgb(190,200,200)', padding: '26px 16px 16px'}}>
                <Button type={"dashed"} icon={'plus'} shape={'circle'} disabled />
                <Button onClick={this.handleAddItem} type="primary" icon='plus' >Add</Button>
                <Button ghost >Ghost</Button>
                <Dropdown overlay={
                    <Menu onClick={this.handleMenuClick}>
                    <Menu.Item key={"1"}>One</Menu.Item>
                    <Menu.Item key={"2"}>Two</Menu.Item>
                    <Menu.Item key={"3"}>Three</Menu.Item>
                    </Menu>
                }>
                    <Button className="ant-dropdown-link">
                        Actions<Icon type={'down'}/>
                    </Button>
                </Dropdown>
            </div>
            <div>
                {
                    this.state.list.map((item,index) => {
                        return <TodoItem key={index} content={item} index={index} delete={this.handleClick}/>
                    })
                }
            </div>
        </React.Fragment>
    );
  }
  handleInputValue =(e)=>{
        this.setState({
            inputValue:e.target.value
        })
  }
  handleAddItem =()=>{
        this.setState({
            list: [...this.state.list,this.state.inputValue],
            inputValue:''
        })
  }
  handleClick =(index)=>{
        const newList = [...this.state.list];
        newList.splice(index,1);
        this.setState({
            list:newList
        })
  }
    handleMenuClick = ()=>{
        // console.log('1');
        window.alert('hello world');
    }
}

export default TodoList;
