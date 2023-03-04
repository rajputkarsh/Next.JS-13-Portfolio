
export const sendResponse = (status: number, response: Object) => {
  return new Response(JSON.stringify(response), {status})
}