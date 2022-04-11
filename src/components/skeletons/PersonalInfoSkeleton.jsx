import { Skeleton } from 'primereact/skeleton'
import React from 'react'

const PersonalInfoSkeleton = () => {
    return (
        <>
            <div className="p-d-flex p-mb-3">
                <Skeleton shape="circle" size="4rem" className="p-mr-2"></Skeleton>
                <div>
                    <Skeleton width="10rem" className="p-mb-2"></Skeleton>
                    <Skeleton width="5rem" className="p-mb-2"></Skeleton>
                    <Skeleton height=".5rem"></Skeleton>
                </div>
            </div>
        </>
    )
}

export default PersonalInfoSkeleton
