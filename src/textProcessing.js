function processText(text) {
    const cleanedText = text.replace(/[^\w\s]/g, ' ').toLowerCase();
    return cleanedText;
  }
  
  export default processText;