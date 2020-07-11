import React from 'react'
import Home from '../components/Home'
import Header from '../components/Header'
import Layout from '../components/layouts/Layout'


const index = (props) => {
    console.log( 'check',props)
    return (
        <div>
            <Layout hideAside = {false}>
              <Home {...props}/>
            </Layout>
        </div>
    )    
}

export default index;

