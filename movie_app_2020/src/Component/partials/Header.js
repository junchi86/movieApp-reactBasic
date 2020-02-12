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
        font-size:1.5em;
        padding:0 13vw;
    }
    .item{
        line-height:6vh;
    }
    .input{
        width:30vw;
        line-height:6vh;
        margin-right:2vw
    }
    @media only screen and (max-width:769px) {
        .menu{
            position:relative;
            width:100%;
            height:50px;
            font-size:1.3em;
            padding:0 5% 
        }
        .item{
            height:50px;
            line-height:50px;
        }
        .input{
            width:50vw;
            line-height:50px;
            margin-right:0
        }
    }

`

function Header() {
    let history = useHistory()
    return (
        <>
        <DDiv>
            <Menu className="menu" mode="horizontal">
                <Input.Search
                    key='1'
                    className="input"
                    placeholder="input search text"
                    onSearch={value=>{history.push({pathname:`/search/${value}`,state:{
                        value
                    }})}}
                />
                <Menu.Item className="item" key='2'><Link to="/">Movies</Link></Menu.Item>
                <Menu.Item className="item" key='3'><Link to="/about">About</Link></Menu.Item>
                <Menu.Item className="item" key='4'><a href="https://junchi86.github.io/index" rel="nonrefferer noopener">Hyuk's-Momentum</a></Menu.Item> 
            </Menu>        
        </DDiv>
        </>
    )
}

export default Header
