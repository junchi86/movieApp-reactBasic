
import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
width:100%;
height:94vh;
margin:auto;
position:relative;
    iframe{
        position:absolute;
        width: 60%;
        height: 40vh;
        margin:auto;
        transform:translateX(-50%);
        top:6%;
        left:50%;
        border-radius:10px;     
        z-index:10;
    }
    .text{
        position:absolute;
        width:60%;
        height:auto;
        padding:30px;
        border-radius:10px;
        top:56%;
        transform:translateX(-50%);
        left:50%;
        background:rgba(0,0,0,0.6);
        h1{
            padding-bottom:20px;
            font-size:40px;
            font-weight:bold;
            color:white;
        }
        h2{
            font-size:30px;
            padding-bottom:10px;
            color:lightpink
        }
        h3{
            font-size:30px;
            color:gray
        }
    }

    @media only screen and (max-width:1200px) {
        width:100%;
        height:100%;
        position:static;
        margin:auto;
        iframe{
            position:static;
            width:100%;
            max-height: 80vh;
            top:0;
            left:0;
            transform:none;
        }
        .text{position:static;
            margin:1vh auto 0 auto;
            width:100%;
            height:auto;
            top:0;
            left:0;
            transform:none;
            h1{font-size:30px}
            h2{font-size:20px}
            h3{font-size:20px}
        }
    }

`

function MovieDetail({ location }) {
    return (
        <Div style={{background: `URL(${location.state.background})`,
                    backgroundRepeat:'no-repeat',
                    backgroundSize:'cover'}}>
            <iframe title={location.state.trailer} src={`https://www.youtube.com/embed/${location.state.trailer}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            <div className='text'>
                <h1>{location.state.title}</h1>
                <h2>{location.state.year} {location.state.genres.map(i=>i)}</h2>
                <h3>{location.state.summary.slice(0,400)}</h3>
            </div>
        </Div>
    )}

export default MovieDetail
