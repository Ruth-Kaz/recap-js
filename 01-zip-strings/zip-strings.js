function zipStrings(strA, strB) {
  let result = "";
  const minLength = Math.min(strA.length, strB.length);
  for (let i = 0; i < minLength; i++) {
    result += strA[i] + strB[i];
  }

  // Append remaining characters from longer string
  if (strA.length > minLength) {
    result += strA.substring(minLength);
  } else if (strB.length > minLength) {
    result += strB.substring(minLength);
  }
  return result;
}
