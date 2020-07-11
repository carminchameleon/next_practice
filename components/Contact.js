import React from 'react'

const Contact = props => {
    const { data } = props;
 return (
     <>
        <div>Current Index Number : {data.id}</div>
         <div>User Id : {data.userId}</div>
         <div>Title : {data.title}</div>
         <div>Body : {data.body}</div>
     </>
 )
}

export default Contact