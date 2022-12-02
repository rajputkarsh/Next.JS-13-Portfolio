
export const redirectTo = (url: string, isNewTab=false) => {

  if(isNewTab)
    window.open(url, '_blank');
  else
    window.open(url, '_self');
  
}