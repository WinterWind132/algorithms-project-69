import createInvertedIndex from '../src/indexReverter';

describe('createInvertedIndex', () => {
  it('should create an inverted index correctly', () => {
    const doc1 = { id: 'doc1', text: 'some text' };
    const doc2 = { id: 'doc2', text: 'some text too' };
    const documents = [doc1, doc2];

    const expectedIndex = {
      some: ['doc1', 'doc2'],
      text: ['doc1', 'doc2'],
      too: ['doc2'],
    };

    const index = createInvertedIndex(documents);
    expect(index).toEqual(expectedIndex);
  });

  it('should handle duplicate words in the same document', () => {
    const doc1 = { id: 'doc1', text: 'some some text' };
    const doc2 = { id: 'doc2', text: 'some text too' };
    const documents = [doc1, doc2];

    const expectedIndex = {
      some: ['doc1', 'doc2'],
      text: ['doc1', 'doc2'],
      too: ['doc2'],
    };

    const index = createInvertedIndex(documents);
    expect(index).toEqual(expectedIndex);
  });

  it('should handle documents with no words', () => {
    const doc1 = { id: 'doc1', text: '' };
    const doc2 = { id: 'doc2', text: 'some text too' };
    const documents = [doc1, doc2];

    const expectedIndex = {
      some: ['doc2'],
      text: ['doc2'],
      too: ['doc2'],
    };

    const index = createInvertedIndex(documents);
    expect(index).toEqual(expectedIndex);
  });
});