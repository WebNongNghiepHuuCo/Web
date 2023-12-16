import React from 'react'
import BaseLayout from '~/layouts'
import CardAbout from './components/CardAbout'

export default function About() {
  return (
    <BaseLayout>
      <div className='flex items-center w-full'>
        <div className='max-w-screen-xl mx-auto py-2 px-4 w-full'>
            <CardAbout/>
        </div>
      </div>
    </BaseLayout>
  )
}
