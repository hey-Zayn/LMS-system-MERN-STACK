// import React from 'react'

import { Link } from "react-router-dom"

const SideBarBottom = () => {
  return (
    <div>
      <div className="flex sticky top-[calc(100vh_-_48px_-_16px)] flex-col h-12 border-t px-2 border-stone-300 justify-end text-xs">
      <div className="flex items-center justify-between">
          <div>
            <p className="font-bold">Chismosa</p>
            <p className="text-stone-500">contact to support</p>
          </div>


        <button className="px-2 py-1.5 font-medium bg-stone-200 hover:bg-stone-300 transition-colors rounded cursor-pointer">
          <Link to="/contact">Support</Link>
        </button>
      </div>
    </div>

    </div>
  )
}

export default SideBarBottom
