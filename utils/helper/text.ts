
export const  titleCase = (text: string) => {

  text = text.replace(/_/g, ' ');

  return text.replace(/\b([a-z])/g, function (_, initial) {
      return initial.toUpperCase();
  });

}