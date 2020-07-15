//var csv is the CSV file with headers
export const csvToJson = (csv) => {
  const lines = csv.split("\n");
  const result = [];
  const headers = lines[0].split(",");
  for (var i = 1; i < lines.length; i++) {
    const obj = {};
    const currentline = lines[i].split(",");
    for (let j = 0; j < headers.length; j++) {
        obj[headers[j].replace(/\s/g, '').toLowerCase()] = currentline[j];
    }
    result.push(obj);
  }
  return result;
};

// Auxiliar function for routes
export const  urlify = (str) => {
  var map = {
      '-' : ' ',
      'a' : 'á|à|ã|â|À|Á|Ã|Â',
      'e' : 'é|è|ê|É|È|Ê',
      'i' : 'í|ì|î|Í|Ì|Î',
      'o' : 'ó|ò|ô|õ|Ó|Ò|Ô|Õ',
      'u' : 'ú|ù|û|ü|Ú|Ù|Û|Ü',
      'c' : 'ç|Ç',
      'n' : 'ñ|Ñ'
  };

  str = str.toLowerCase();

  for (var pattern in map) {
    str = str.replace(new RegExp(map[pattern], 'g'), pattern);
  };

  return str;
};