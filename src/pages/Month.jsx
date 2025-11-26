import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
 

function Month() {
    const {value} = useParams()
    const navigate = useNavigate()
    return (
        <> 
             
            <div className='mt-6'> 
                <h1 className='text-white text-2xl capitalize'>
                    Month = {value}
                </h1>
            <button onClick={() => navigate('/')} className='text-white text-2xl'>Back</button>
            </div>
        </>

  )
}

export default Month