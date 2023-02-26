import React, { Fragment } from "react"
import "./admin.scss"
import { Header } from '../../components/Header/Header.js'
import { Main } from '../../components/Main/Main.js'
import { Footer } from '../../components/Footer/Footer.js'

const Admin = () => {
  return(
    <Fragment>
      <Header/>
      <Main/>
      <Footer/>
    </Fragment>
  )
}

export { Admin }