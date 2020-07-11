import React from 'react'
import Layout from '../components/layouts/Layout'
import About from '../components/About'
const about = (props) => {
    const {hideAside } = props;
    return (
        <div>
              <Layout hideAside>
                   <About {...props}/>
            </Layout>
        </div>
    )   
}

export default about;

