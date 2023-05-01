export const showData = async (category) => {
  const ulr = `http://api.giphy.com/v1/gifs/search?api_key=cjqN45W5LgJO8eKMDvH0DWjgIFvMbUWl&q=${category}&limit=20`
  const respuesta = await fetch(ulr)
  const { data } = await respuesta.json()

  const gif = data.map((dato) => ({
    id: dato.id,
    title: dato.title,
    url: dato.images.downsized_medium.url,
  }))

  return gif
}
