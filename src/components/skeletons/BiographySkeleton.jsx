import { Skeleton } from 'primereact/skeleton'
import React from 'react'

const BiographySkeleton = () => {
    return (
        <div>
          <Skeleton width="10rem" className="p-mb-2"></Skeleton>
          <Skeleton width="100%" height="100px"></Skeleton>
        </div> 
    )
}

export default BiographySkeleton
