
export const RESPONSES = {
  PROJECTS_LIST : (data: Object) => ({
   type: 'PROJECTS_LIST',
   message: 'Projects list fetched successfully',
   data: data, 
  }),
}
