import processText from './textProcessing';

export default function fuzzySearch(documents, query) {
  const processedQuery = processText(query).trim().split(/\s+/);

  const results = documents.map(doc => {
    const processedText = processText(doc.text);
    const matches = processedQuery.reduce((acc, word) => {
      const wordMatches = (processedText.match(new RegExp(`\\b${word}\\b`, 'gi')) || []).length;
      return acc + wordMatches;
    }, 0);
    return { id: doc.id, matches };
  }).filter(result => result.matches > 0)
    .sort((a, b) => b.matches - a.matches)
    .map(result => result.id);

  return results;
}