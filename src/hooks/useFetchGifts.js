import { useEffect, useState } from 'react'
import { showData } from '../helpers/getApiGif'

export const useFetchGifts = (category) => {
  const [imges, setImges] = useState([])

  const [isLoading, setIsLoading] = useState(true)

  const getImages = async () => {
    const newImages = await showData(category)
    setImges(newImages)
    setIsLoading(false)
  }

  useEffect(() => {
    getImages()
  }, [])
  return {
    imges: imges,
    isLoading: isLoading,
  }
}
