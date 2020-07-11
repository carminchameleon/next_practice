import React from 'react'
import Contact from '../../components/Contact'
import axios from 'axios'

const Index = props => {
        return (
        <div>
            <Contact {...props} />
        </div>
    )
}

Index.getInitialProps = async context => {
    const id = context.query.id

    try { 
      const result = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      const data = result.data
      return {data}
    } catch {
      console.log('error', error)
    }
}

export default Index;