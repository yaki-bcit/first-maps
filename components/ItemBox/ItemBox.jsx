import './ItemBox.jsx';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

const LangText = styled.p`
padding-top: 3em;
padding-left: 1.5em;
color: white;
font-family: sans-serif;
margin: 0;
`

const BubbleBox = styled.div`
background-image: linear-gradient(to bottom, grey, transparent), url("https://d3d0lqu00lnqvz.cloudfront.net/media/media/thumbnails/41a929c8-9efb-45c7-99a3-bf0ea227c3dd.jpg");
border-radius: 18px;
cursor: pointer;
margin-bottom:${props=>props.margb};
width:${props=>props.wid};
height:${props=>props.hei};
filter: drop-shadow(5px 5px 10px rgba(248, 137, 60, 0.4));
`

export default function ItemBox({
  label,
  width='115px',
  height='137px',
  margb='1.5em'
}){
  const [show, setShow] = useState(true)
  return (
        <BubbleBox margb={margb} onClick={()=>setShow(false)} wid={width} hei={height}>
          <LangText>{label}</LangText>
        </BubbleBox>
  )
}

ItemBox.propTypes = {
label: PropTypes.string
}

ItemBox.defaulProps = {
label:'',
}






{/* <div className="Itembox"> */}
//115px
// 137px
//{/* <img src="https://d3d0lqu00lnqvz.cloudfront.net/media/media/thumbnails/41a929c8-9efb-45c7-99a3-bf0ea227c3dd.jpg" alt="placeholder" /> */}

