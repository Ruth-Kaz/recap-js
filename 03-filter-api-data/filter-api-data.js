function filterApiData(apiData, mandatoryKeys) {
  return apiData.filter((obj) => {
    // Check if every mandatory key exists in the current object
    return mandatoryKeys.every((key) => obj.hasOwnProperty(key));
  });
}
// filterApiData, obj => { ... } represents the filtering criteria applied to each object in apiData. Only objects for which the arrow function returns true are included in the final filtered array returned by filterApiData.

//I don't get it :)
