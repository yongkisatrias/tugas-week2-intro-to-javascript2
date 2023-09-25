const name = ["Abigail", "Alexandra", "Alison", "Amanda", "Angela", "Bella", "Carol", "Caroline", "Carolyn", "Deirdre", "Diana", "Elizabeth", "Ella", "Faith", "Olivia", "Penelope"];

const searchName = (keyword, limit, callback) => {
  // Validate input
  if (typeof keyword !== "string") {
    callback("Keyword harus berupa string");
    return;
  }
  if (typeof limit !== "number" || limit <= 0) {
    callback("Limit harus berupa angka dan lebih dari 0");
    return;
  }

  // Search for a name
  const lowercaseKeyword = keyword.toLowerCase();
  const results = name.filter((name) => name.toLowerCase().includes(lowercaseKeyword));

  // Call a callback with the search results
  callback(results.slice(0, limit));
};

const printResults = (results) => {
  console.log(results);
};

// Execute
searchName("An", 3, printResults); // Output: [ 'Alexandra', 'Amanda', 'Diana' ]
