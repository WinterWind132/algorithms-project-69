import search from '../src/index';

test('search function', () => {
  const doc1 = { id: 'doc1', text: "I can't shoot straight unless I've had a document and a pint!" };
  const doc2 = { id: 'doc2', text: 'Another document for testing' };
  const doc3 = { id: 'doc3', text: 'No matches here' };
  const documents = [doc1, doc2, doc3];

  expect(search(documents, 'pint')).toEqual(['doc1']);
  expect(search(documents, 'pint!')).toEqual(['doc1']);
  expect(search(documents, 'document')).toEqual(['doc1', 'doc2']);
  expect(search(documents, 'matches')).toEqual(['doc3']);
  expect(search(documents, 'none')).toEqual([]);
});