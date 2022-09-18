import Header from "../header/Header";
import React, { Fragment } from 'react'
import MobileMenuContext from "base/contexts/MobileMenuContext";
import RegisteredPartnersProvider from "base/contexts/RegisteredPartnersContext";

const Layout: React.FC<{ children: JSX.Element }> = ({ children }) => {

  return <Fragment>
    <MobileMenuContext>
      <Header />
    </MobileMenuContext>

    <RegisteredPartnersProvider>
      <main>
        {children}
      </main>
    </RegisteredPartnersProvider>
  </Fragment>
}

export default Layout
