import React, { Fragment } from 'react'
import Routers from '../../routers/routers'
import Header from '../header/header'
// import Footer from '../footer/footer'

const layout = () => {
  return <Fragment>
    <Header/>
    <div>
      
        <Routers/>
        
    </div>
    {/* <Footer/> */}
  </Fragment>
}

export default layout;