
export const RESPONSES = {
  PROJECTS_LIST : (data: Object) => ({
   type: 'PROJECTS_LIST',
   message: 'Projects list fetched successfully',
   data: data, 
  }),
  GAMES_LIST: (data: Object) => ({
    type: 'GAMES_LIST',
    message: 'Games list fetched successfully',
    data: data,
  }),
  GITHUB_LIST: (data: Object) => ({
    type: 'GITHUB_LIST',
    message: 'Github Commit list fetched successfully',
    data: data,
  }),

}
