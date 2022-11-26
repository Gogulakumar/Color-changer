import React, { useState } from 'react'
import Select from 'react-select'

import './Color.css'
function Form() {
  var colors=[
    {
       value:1,
       label:"red"
    },
    {
       value:2,
       label:"blue"
    },
    {
       value:3,
       label:"orange"
    },
    {
       value:4,
       label:"green"
    },
    {
        value:5,
        label:"yellow"
    },
    {
        value:6,
        label:"purple"
    },
    {
        value:7,
        label:"pink"
    },
    {
        value:8,
        label:"plum"
    },
    {
        value:9,
        label:"darkblue"
    },
    {
        value:10,
        label:"black"
    }
  ];
  var [setbgcolor,ddlvalue]=useState(colors.label);
  var ddlhandle = (e) => {
    ddlvalue(e.label);
  }
  return (
    <>
      <div className='h'>
      {/* <style>{'h {background-color:'+setbgcolor+';}'}</style> */}

        <Select options={colors} onChange={ddlhandle} className="sl">
        </Select>
      </div>
        <div className='drop'>
            <style>{'.drop {background-color:'+setbgcolor+';}'}</style> 
          <h3> {setbgcolor}</h3>
        </div>
    </>
  )
}

export default Form
