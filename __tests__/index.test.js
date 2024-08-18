import search from '../src/index';

test('search function', () => {
  const documents = [
    { name: 'doc1', content: 'This is a test document' },
    { name: 'doc2', content: 'Another document for testing' },
    { name: 'doc3', content: 'No matches here' },
  ];

  expect(search(documents, 'test')).toEqual(['doc1', 'doc2']);
  expect(search(documents, 'document')).toEqual(['doc1', 'doc2']);
  expect(search(documents, 'matches')).toEqual(['doc3']);
  expect(search(documents, 'none')).toEqual([]);
});