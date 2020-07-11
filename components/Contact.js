import React from 'react'

const Contact = props => {
    const { textData } = props;
 return (
     <>
        <div>Current Index Number : {textData.id}</div>
         <div>User Id : {textData.userId}</div>
         <div>Title : {textData.title}</div>
         <div>Body : {textData.body}</div>
     </>
 )
}

export default Contact