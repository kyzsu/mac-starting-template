import { Route, Routes } from "react-router-dom"
import AdminLayout from "./components/AdminLayout"
import Layout from "./components/Layout"
import Login from "./pages/Login"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route index element={<Login />} />
        {/* private routes */}
        <Route path="admin" element={<AdminLayout />}>
          <Route
            index
            element={
              <h1 className="text-3xl font-bold underline text-white">
                Hello admin!
              </h1>
            }
          />
        </Route>
      </Route>
    </Routes>
  )
}

export default App
