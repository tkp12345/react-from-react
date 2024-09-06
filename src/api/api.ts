export async function searchProducts(query) {
  const response = await fetch(`https://dummyjson.com/products/search?q=${query}`)
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  return response.json()
}
