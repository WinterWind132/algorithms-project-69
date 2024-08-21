import tfidf from '../src/tfidf';

describe('TF-IDF functions', () => {
  const { computeTF, computeIDF, computeTFIDF } = tfidf;

  const doc1 = ["this", "is", "a", "sample"];
  const doc2 = ["this", "is", "another", "example"];
  const docList = [doc1, doc2];

  const wordDict1 = doc1.reduce((acc, word) => {
    acc[word] = (acc[word] || 0) + 1;
    return acc;
  }, {});

  const wordDict2 = doc2.reduce((acc, word) => {
    acc[word] = (acc[word] || 0) + 1;
    return acc;
  }, {});

  const tf1 = computeTF(wordDict1, doc1);
  const tf2 = computeTF(wordDict2, doc2);

  const idf = computeIDF(docList);

  const tfidf1 = computeTFIDF(tf1, idf);
  const tfidf2 = computeTFIDF(tf2, idf);

  test('computeTF should calculate Term Frequency correctly', () => {
    expect(tf1).toEqual({
      this: 0.25,
      is: 0.25,
      a: 0.25,
      sample: 0.25
    });

    expect(tf2).toEqual({
      this: 0.25,
      is: 0.25,
      another: 0.25,
      example: 0.25
    });
  });

  test('computeIDF should calculate Inverse Document Frequency correctly', () => {
    expect(idf).toEqual({
      this: Math.log(2 / 2),
      is: Math.log(2 / 2),
      a: Math.log(2 / 1),
      sample: Math.log(2 / 1),
      another: Math.log(2 / 1),
      example: Math.log(2 / 1)
    });
  });

  test('computeTFIDF should calculate TF-IDF correctly', () => {
    expect(tfidf1).toEqual({
      this: 0.25 * Math.log(2 / 2),
      is: 0.25 * Math.log(2 / 2),
      a: 0.25 * Math.log(2 / 1),
      sample: 0.25 * Math.log(2 / 1)
    });

    expect(tfidf2).toEqual({
      this: 0.25 * Math.log(2 / 2),
      is: 0.25 * Math.log(2 / 2),
      another: 0.25 * Math.log(2 / 1),
      example: 0.25 * Math.log(2 / 1)
    });
  });
});