import React, { useState } from 'react'
import PoemList from '../components/PoemList'

export default function Poem() {
  const [refresh, setRefresh] = useState(false);

  return (
    <div className='gallery'>
      <h1>Poems</h1>
      <PoemList key={refresh}/>
    </div>
  )
}
