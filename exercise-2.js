const names = ["Abigail", "Alexandra", "Alison", "Amanda", "Angela", "Bella", "Carol", "Caroline", "Carolyn", "Deirdre", "Diana", "Elizabeth", "Ella", "Faith", "Olivia", "Penelope"];

const searchName = (keyword, limit, callback) => {
  if (typeof keyword !== "string" || typeof limit !== "number" || limit <= 0) {
    return callback("Input tidak valid");
  }

  const result = names.filter((name) => name.toLowerCase().includes(keyword.toLowerCase()));

  const limitedResult = result.slice(0, limit);

  callback(null, limitedResult);
};

const displaySearchResult = (error, result) => {
  if (error) {
    console.log(error);
  } else {
    console.log(result);
  }
};

searchName("an", 3, displaySearchResult); // output : 'Alexandra', 'Amanda', 'Angela'
