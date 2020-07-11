import Header from '../Header'
import Sidebar from '../Sidebar'

const Layout = props => {
   const {hideAside} = props;
   console.log('checkit', props)
   return (
       <div>
           <Header/>
           {
               !hideAside && <Sidebar/>
           }
           <div>
               {props.children}
           </div>
       </div>
   )
}

export default Layout;