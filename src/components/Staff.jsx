import React from 'react'
import NavigationBar from '../container/NavigationBar'
import SearchTab from '../components/SearchTab.jsx'

export const Staff = () => {
  return (
    <div className='flex justify-between'>
      <NavigationBar/>
      <SearchTab/>
    </div>
  )
}

export default Staff
