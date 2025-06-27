import React, { useEffect, useState } from 'react'
import Register from './components/Register'
import Home from './components/Home'
import { auth, db } from './firebase/config'
import { collection, getDocs } from 'firebase/firestore'


const App = () => {
  const [user, setUser] =  useState(null)



  // state yaratish
  const [ data, setData ] = useState([])
// funksiya yaratish datalarni olib kelish uchun
  const getData = async () => {
     const collectionData = collection(db, "movies")

     const movies = await getDocs(collectionData)

     const items = movies.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));

    setData(items)
  }
//  ma'lumot faqat birmarta kelishini taminlashi uchun
  useEffect(() => {
    getData()
  }, [])


  useEffect(() => {
    auth.onAuthStateChanged((newUser) => {
      setUser(newUser)
    })
  })

  console.log(user)

  console.log(data)

  const [logged, setLogged] = useState(false)
  return (
    <div>
      {
        logged ? <Home/> :  <Register setLogged={setLogged}/>
      }

      <img src={user.photoURL} alt="" />
    </div>
  )
}

export default App