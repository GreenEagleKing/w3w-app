
// Fetching mock user data for testing using postman api
export default async function fetchData() {
  const response = await fetch("https://99a59328-7f3c-4be4-a9a1-0e6b55a2902b.mock.pstmn.io/get")
  const data = await response.json()
  return data
}
