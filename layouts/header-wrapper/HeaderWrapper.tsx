import React from 'react'
import { Header } from '../../components/header/Header'

interface Props  {
    children?: JSX.Element,
};
const HeaderWrapper = ({children }: Props) => {
  return (
    <div>
        <Header/>
       <main>
         {children}
       </main>
    </div>
  )
}
export default HeaderWrapper