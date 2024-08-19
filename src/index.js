import processText from './textProcessing';

export default function search(documents, query) {
  const processedQuery = processText(query).trim();
  const queryRegex = new RegExp(`\\b${processedQuery}\\b`, 'gi');

  const results = documents
    .map(doc => {
      const matches = (doc.text.match(queryRegex) || []).length;
      return { id: doc.id, matches };
    })
    .filter(result => result.matches > 0)
    .sort((a, b) => b.matches - a.matches)
    .map(result => result.id);

  return results;
}