const stringToAcronym = (text: string) => (
  text.split(/\s/)
    .reduce((response, word) => response + word.slice(0, 1), '')
);

export default stringToAcronym;
