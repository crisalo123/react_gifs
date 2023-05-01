import GifItem from './GifItem'
import { useFetchGifts } from './hooks/useFetchGifts'

export const GifGrid = ({ category }) => {
  const { imges, isLoading } = useFetchGifts(category)

  return (
    <>
      <h3>{category}</h3>
      {isLoading && <h2 className="text-center">Cargando....</h2>}

      <div className="card-grid">
        {imges.map((img) => (
          <GifItem key={img.id} {...img} />
        ))}
      </div>
    </>
  )
}
