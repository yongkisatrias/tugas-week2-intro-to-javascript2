const valueSelection = (firstValue, lastValue, dataArray) => {
  // Validate input
  if (dataArray.length <= 5) {
    return "Jumlah angka dalam dataArray harus lebih dari 5";
  }
  if (firstValue >= lastValue) {
    return "Nilai akhir harus lebih besar dari nilai awal";
  }

  // Search for data in the array
  const searchResult = dataArray.filter((item) => item > firstValue && item < lastValue);

  if (searchResult.length === 0) {
    return "Nilai tidak ditemukan";
  }
  // Sort search results
  searchResult.sort((a, b) => a - b);

  return searchResult;
};

// Execute
console.log(valueSelection(5, 20, [2, 25, 4, 14, 17, 30, 8])); // Output: [8, 14, 17]
console.log(valueSelection(15, 3, [2, 25, 4, 14, 17, 30, 8])); // Output: "Nilai akhir harus lebih besar dari nilai awal"
console.log(valueSelection(5, 17, [2, 25, 4])); // Output: "Jumlah angka dalam dataArray harus lebih dari 5"
console.log(valueSelection(5, 17, [2, 25, 4, 1, 30, 18])); // Output: "Nilai tidak ditemukan"
