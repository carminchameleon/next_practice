import React from 'react'
import axios from 'axios'
import Contact from '../../components/Contact'

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
      const textData = result.data
      return {textData}
    } catch {
      console.log('error', error)
    }
}

export default Index;