import React from 'react'
import { Menu, Icon } from 'antd';
import styled from 'styled-components'
import { Link, useHistory } from 'react-router-dom';
import {Input} from 'antd'
import 'antd/dist/antd.css'



const DDiv = styled.div`
    .menu{
        position:relative;
        width:100%;
        height:6vh;
        line-height:6vh;
        padding-left:13%;
        font-size:1.5em;
    }
    .input{
        position:absolute;
        width:30%;
        top:50%;
        transform:translateY(-50%);
        right:13%
    }
`

function Header() {
    let history = useHistory()
    return (
        <>
        <DDiv>
            <Menu className="menu" mode="horizontal">
                <Menu.Item key='1'><Link to="/">Movies</Link></Menu.Item>
                <Menu.Item key='2'><Link to="/about">About</Link></Menu.Item>
                <Menu.Item key='3'><a href="https://junchi86.github.io/index" rel="nonrefferer noopener">Hyuk's-Momentum</a></Menu.Item>
                <Input.Search
                    key='4'
                    className="input"
                    placeholder="input search text"
                    onSearch={value=>{history.push({pathname:`/search/${value}`,state:{
                        value
                    }})}}
                />    
            </Menu>        
        </DDiv>
        </>
    )
}

export default Header
