import React from 'react'
import Notice from '../../components/Notice'

const Index = props => {
    console.log('보자',props)
    return (
        <div>
            <Notice {...props}/>
        </div>
    )
}

Index.getInitialProps = async context => {
    console.log('context',context)
    const id = context.query.id;
    return {id}
}

export default Index;