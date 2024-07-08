import { Route, Routes } from "react-router-dom"
import AdminLayout from "./components/AdminLayout"
import Layout from "./components/Layout"
import Login from "./pages/Login"
import LocationMain from "./pages/location-main/LocationMain"
import RegionList from "./pages/location-main/RegionList"

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
              <h1 className="text-3xl font-bold text-white underline">
                Hello admin!
              </h1>
            }
          />
          <Route path="location">
            <Route index element={<LocationMain />} />
            <Route path="region-list" element={<RegionList />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  )
}

export default App
