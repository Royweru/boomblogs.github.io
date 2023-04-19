import React from 'react'
import Feeds from './Feeds'
import { useContext } from 'react'
import DataContext from './Context/DataContext'

const Home = () => {
  const {searchresults,isLoading,fetchErr}= useContext(DataContext)
  return (
    <main className='Home'>
       {isLoading && 
        <p 
         style={{
          paddingTop:'40px',
          color:'blue',
          fontSize:'40px',
          fontWeight:'bold'
         }}
        >Loading Posts a sec....</p>
       }
       {fetchErr &&
        <p style={{
            paddingTop:'40px',
            color:'red',
            fontSize:'30px'
        }}>
            {fetchErr}
        </p>
       }
      
      {!isLoading&&!fetchErr&&
        searchresults.length?(
          <Feeds
            posts={searchresults}        
          />
         ):(
          !isLoading &&
            <p style={{
              paddingTop:"30px",
              fontSize:"40px",
              fontFamily:"monospace",
              color:"blue"
            }}>
              OOPS! there are no posts to display
            </p>
          
          
         )
      }
    </main>
  )
}

export default Home