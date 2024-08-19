import fuzzySearch from '../src/fuzzySearch';

test('fuzzy search function', () => {
  const doc1 = { id: 'doc1', text: "I can't shoot straight unless I've had a pint!" };
  const doc2 = { id: 'doc2', text: "Don't shoot shoot shoot that thing at me." };
  const doc3 = { id: 'doc3', text: "I'm your shooter." };
  const documents = [doc1, doc2, doc3];

  expect(fuzzySearch(documents, 'shoot at me')).toEqual(['doc2', 'doc1']);
  expect(fuzzySearch(documents, 'pint shooter')).toEqual(['doc1', 'doc3']);
  expect(fuzzySearch(documents, 'nonexistent')).toEqual([]);
});