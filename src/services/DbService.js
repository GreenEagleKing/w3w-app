import { useState, useEffect } from "react"
import { db } from "../firebase"
import { uid } from "uid"
import { set, ref, update, get } from "firebase/database"

export function DbService() {
  const [currentUser, setCurrentUser] = useState(null)
  const [isCorrectLocation, setIsCorrectLocation] = useState(false)
  const [isNewUser, setIsNewUser] = useState(false)
  const [isCreated, setIsCreated] = useState(false)
  const [isUpdating, setIsUpdating] = useState(false)
  const [isRetrieving, setIsRetrieving] = useState(false)

  useEffect(() => {
    const userState = window.localStorage.getItem("w3w-user-state")
    const typeOfRequest = JSON.parse(
      window.localStorage.getItem("w3w-isNewUpdCre-state")
    )
    if (userState !== null) {
      setCurrentUser(JSON.parse(userState))
      setIsNewUser(JSON.parse(typeOfRequest.isNewUser))
      setIsCreated(JSON.parse(typeOfRequest.isCreated))
      setIsUpdating(JSON.parse(typeOfRequest.isUpdating))
      setIsRetrieving(JSON.parse(typeOfRequest.isRetrieving))
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem("w3w-user-state", JSON.stringify(currentUser))
    window.localStorage.setItem(
      "w3w-isNewUpdCre-state",
      JSON.stringify({
        isNewUser: isNewUser,
        isUpdating,
        isCreated,
        isRetrieving,
      })
    )
  }, [currentUser, isNewUser, isUpdating, isCreated, isRetrieving])

  const resetState = () => {
    setCurrentUser(null)
    setIsNewUser(false)
    setIsUpdating(false)
    setIsCreated(false)
    setIsCorrectLocation(false)
    setIsRetrieving(false)
  }

  const handleIsCorrectLocation = () => {
    setIsCorrectLocation(!isCorrectLocation)
  }

  const handleIsRetrieving = (makeFalse) => {
    makeFalse ? setIsRetrieving(false) : setIsRetrieving(true)
  }

  const handleIsNewUser = () => {
    setIsNewUser(!isNewUser)
  }

  const handleUpdateUser = (makeFalse) => {
    makeFalse ? setIsUpdating(false) : setIsUpdating(true)
  }

  console.log(isNewUser, isCreated, isUpdating, isCorrectLocation)

  const handleIsCreated = () => {
    setIsCreated(!isCreated)
  }

  const createUser = async (name) => {
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

  const findUser = async (username, checkType) => {
    try {
      const snapshot = await get(ref(db, `/${username}`))
      if (checkType === "retrieveUpdate" && snapshot.val() === null) {
        throw new Error("User not found")
      } else if (checkType === "newUser" && snapshot.val() !== null) {
        throw new Error("Username already exists")
      }
      setCurrentUser(snapshot.val())
    } catch (error) {
      throw error
    }
  }

  const updateLocations = async (loc1, loc2) => {
    try {
      await update(ref(db, `/${currentUser.username}`), {
        what3wordLocations: {
          locationOne: loc1,
          locationTwo: loc2,
        },
      }).then(() => {
        get(ref(db, `/${currentUser.username}`)).then((snapshot) => {
          setCurrentUser(snapshot.val())
        })
      })
      handleIsCreated()
    } catch (error) {
      throw error
    }
  }

  // const checkUser = async (username) => {
  //   try {
  //     const snapshot = await get(ref(db, `/${username}`))
  //     if (snapshot.val() !== null) {
  //       throw new Error("Username already exists")
  //     }
  //   } catch (error) {
  //     throw error
  //   }
  // }

  return {
    createUser,
    findUser,
    updateLocations,
    // checkUser,
    isCreated,
    isCorrectLocation,
    isNewUser,
    isUpdating,
    isRetrieving,
    currentUser,
    handleIsNewUser,
    handleUpdateUser,
    handleIsCorrectLocation,
    handleIsRetrieving,
    resetState,
  }
}
