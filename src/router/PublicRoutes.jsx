import React from 'react'
import LoginScreen from '../components/LoginScreen/LoginScreen'
import { Routes, Route, Navigate} from 'react-router-dom'

const PublicRoutes = () => {
  return (
    <div>
      <>
          {/*rutas publicas */}
          <Routes>
            <Route path="/login" element={<LoginScreen />} />
            <Route path="*" element={<Navigate to={"/login"} />} />
          </Routes>
        </>
    </div>
  )
}

export default PublicRoutes
