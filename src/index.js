function processText(text) {
  const cleanedText = text.replace(/[^\w\s]/g, ' ').toLowerCase();
  return cleanedText;
}

export default function search(documents, query) {
  const processedQuery = processText(query).trim();
  console.log('Processed Query:', processedQuery);
  const queryRegex = new RegExp(`\\b${processedQuery}\\b`, 'i');
  console.log('Query Regex:', queryRegex);
  return documents
    .filter(doc => {
      const processedText = processText(doc.text);
      console.log('Processed Text:', processedText);
      console.log('Test Result:', queryRegex.test(processedText));
      return queryRegex.test(processedText);
    })
    .map(doc => doc.id);
}