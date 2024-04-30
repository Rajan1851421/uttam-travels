
import { useEffect } from 'react'
import {  useDispatch } from 'react-redux'
import { fetchProduct } from '../../features/producrSlice'

function Data() {
    const dispatch = useDispatch()
    useEffect(() => {
        console.log("UseEfffect");
        dispatch(fetchProduct())
    }, [dispatch])
    return (
        <div>

        </div>
    )
}

export default Data
