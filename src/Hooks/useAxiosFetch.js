import React from 'react'
import axios, { Axios } from 'axios'
import { useState,useEffect } from 'react'
const useAxiosFetch = (dataUrl) => {
    const[data,setData]=useState([])
    const[isLoading,setIsLoading]=useState(false)
    const[fetchErr,setFetchErr]=useState(null)
    
    useEffect(()=>{
        const source = axios.CancelToken.source()
        let isMounted = true; 
        const fetchData=async (url)=>{
         setIsLoading(true)
            try {
                const response= await axios.get(url,{
                    cancelToken:source.token
                });
                if(isMounted){
                    setData(response.data)
                    setFetchErr(null)
                }
            } catch (error) {
                if(isMounted){
                    setFetchErr(error.message)
                    setData(null)
                }}
            finally{
                isMounted && setIsLoading(false)
            }
            }
            fetchData(dataUrl)

            const cleanUp=()=>{
                isMounted =false
                source.cancel()
            }
            return cleanUp
        
        },
    [dataUrl]);
    return{data,isLoading,fetchErr}
}

export default useAxiosFetch