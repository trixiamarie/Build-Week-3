import React from 'react'
import { ClassicSpinner } from 'react-spinners-kit'
import "../../Style/FakeLoaderComponent.css"

export default function FakeLoaderComponent({loading}) {
  return (
    <div className='fake-loader-component'>
    <ClassicSpinner size={30} color="#686769" loading={loading} className="classic-spinner"/>
    </div>
  )
}
 