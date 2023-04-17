import { useState, useEffect } from "react"
import { db } from "../firebase"
import { uid } from "uid"
import { set, ref, update, get } from "firebase/database"

export function DbService() {
  const [currentUser, setCurrentUser] = useState(null)
  const [isLocation, setIsLocation] = useState(false)
  const [isNewUser, setIsNewUser] = useState(false)
  const [isCreated, setIsCreated] = useState(false)
  const [isUpdating, setIsUpdating] = useState(false)

  useEffect(() => {
    const data = window.localStorage.getItem("w3w-user-state")
    if (data !== null) {
      setCurrentUser(JSON.parse(data))
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem("w3w-user-state", JSON.stringify(currentUser))
  }, [currentUser])

  function handleIsLocation() {
    setIsLocation(!isLocation)
  }

  function handleIsNewUser(makeFalse) {
    makeFalse ? setIsNewUser(false) : setIsNewUser(true)
  }

  function handleUpdateUser(makeFalse) {
    makeFalse ? setIsUpdating(false) : setIsUpdating(true)
  }

  function handleIsCreated() {
    setIsCreated(!isCreated)
  }

  async function createUser(name) {
    const uuid = uid()
    try {
      await set(ref(db, `/${name}`), {
        username: name,
        id: uuid,
        what3wordLocations: {
          locationOne: "",
          locationTwo: "",
        },
      }).then(() => {
        setCurrentUser({
          username: name,
          id: uuid,
          what3wordLocations: {
            locationOne: "",
            locationTwo: "",
          },
        })
      })
    } catch (error) {
      throw error
    }
  }

  async function findUser(username) {
    console.log(username)
    try {
      const snapshot = await get(ref(db, `/${username}`))
      if (snapshot.val() === null) {
        throw new Error("User not found")
      }
      setCurrentUser(snapshot.val())
      handleUpdateUser()
    } catch (error) {
      throw error
    }
    console.log(currentUser)
  }

  async function updateLocations(loc1, loc2) {
    try {
      await update(ref(db, `/${currentUser.username}`), {
        what3wordLocations: {
          locationOne: loc1,
          locationTwo: loc2,
        },
      }).then(() => {
        get(ref(db, `/${currentUser.username}`)).then((snapshot) => {
          setCurrentUser(snapshot.val())
          console.log(snapshot.val())
        })
      })
    } catch (error) {
      throw error
    }
  }

  async function checkUser(username) {
    console.log(username)
    try {
      const snapshot = await get(ref(db, `/${username}`))
      if (snapshot.val() !== null) {
        throw new Error("Username already exists")
      }
    } catch (error) {
      throw error
    }
  }

  return {
    createUser,
    findUser,
    updateLocations,
    checkUser,
    isCreated,
    isLocation,
    isNewUser,
    isUpdating,
    currentUser,
    handleIsNewUser,
    handleUpdateUser,
    handleIsCreated,
    handleIsLocation,
  }
}
