import { Link } from "react-router-dom"
import {
  HiGlobeAmericas,
  HiGlobeAsiaAustralia,
  HiGlobeEuropeAfrica,
} from "react-icons/hi2"

import { Button } from "../../components/button"

const LocationMain = () => {
  return (
    <div>
      <div id="region">
        <div className="flex flex-row items-center justify-between mb-4">
          <h1 className="text-white">Region</h1>
          <Button>
            <Link to="/admin/location/region-list">See more</Link>
          </Button>
        </div>
        <div className="grid grid-flow-row grid-cols-3 gap-6">
          <div className="overflow-hidden bg-white rounded-lg shadow">
            <div className="flex flex-row items-center justify-center px-4 py-5 text-center sm:p-6">
              <HiGlobeAmericas size={40} className="mr-4" />
              <span className="font-bold">AMERICA</span>
            </div>
          </div>
          <div className="overflow-hidden bg-white rounded-lg shadow">
            <div className="flex flex-row items-center justify-center px-4 py-5 text-center sm:p-6">
              <HiGlobeAsiaAustralia size={40} className="mr-4" />
              <span className="font-bold">ASIA</span>
            </div>
          </div>
          <div className="overflow-hidden bg-white rounded-lg shadow">
            <div className="flex flex-row items-center justify-center px-4 py-5 text-center sm:p-6">
              <HiGlobeEuropeAfrica size={40} className="mr-4" />
              <span className="font-bold">EUROPE</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LocationMain
