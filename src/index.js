export default function search(documents, query) {
    return documents
      .filter(doc => doc.content.includes(query))
      .map(doc => doc.name);
  }