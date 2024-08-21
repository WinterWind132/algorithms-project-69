function computeTF(wordDict, doc) {
  const tfDict = {};
  const docCount = doc.length;
  for (const [word, count] of Object.entries(wordDict)) {
    tfDict[word] = count / docCount;
  }
  return tfDict;
}

function computeIDF(docList) {
  const idfDict = {};
  const N = docList.length;

  for (const doc of docList) {
    const uniqueWords = new Set(doc);
    for (const word of uniqueWords) {
      if (idfDict[word]) {
        idfDict[word] += 1;
      } else {
        idfDict[word] = 1;
      }
    }
  }

  for (const [word, count] of Object.entries(idfDict)) {
    idfDict[word] = Math.log(N / count);
  }
  return idfDict;
}

function computeTFIDF(tfDict, idfDict) {
  const tfidfDict = {};
  for (const [word, tfValue] of Object.entries(tfDict)) {
    tfidfDict[word] = tfValue * (idfDict[word] || 0);
  }
  return tfidfDict;
}

export default {
  computeTF,
  computeIDF,
  computeTFIDF
};