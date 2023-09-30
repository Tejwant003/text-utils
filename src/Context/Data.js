import React , { useState} from 'react'
import UserContext from './UserContext';
export default function Data({children}) {
    var name = "Aditya";
    const [age, setAge] = useState(3);

  return (
    <>
    <UserContext.Provider value={{name, age, setAge}}>
    {children}
    </UserContext.Provider>

   
    </>
  )
}
