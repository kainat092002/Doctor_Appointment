import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../../context/AdminContext'

const DoctorsList = () => {

  const { doctors, aToken, getAllDoctors } = useContext(AdminContext)

  useEffect(()=>{
     
  },[])

  return (
    <div>

    </div>
  )
}

export default DoctorsList