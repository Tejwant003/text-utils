import React, {useContext} from 'react'
import UserContext from '../Context/UserContext'
export const Footer = () => {
  const {name, age, setAge} = useContext(UserContext);
  const increase = ()=>{
    setAge(age + 1);
  }
  return (
    <>
    {name}
    {age}
    <h1 onClick={increase}>vmidsnvkdsl</h1>
    <div>Footer area</div>
    </>
  )
}
