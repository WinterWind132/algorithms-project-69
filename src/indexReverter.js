function createInvertedIndex(documents) {
    const index = {};
  
    documents.forEach(doc => {
      const words = doc.text.split(/\s+/).filter(word => word.length > 0);
      const docId = doc.id;
  
      words.forEach(word => {
        if (!index[word]) {
          index[word] = [];
        }
        if (!index[word].includes(docId)) {
          index[word].push(docId);
        }
      });
    });
  
    return index;
  }
  
  export default createInvertedIndex;