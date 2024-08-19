import search from '../src/index';

test('search function with relevance', () => {
  const doc1 = { id: 'doc1', text: "I can't shoot straight unless I've had a pint!" };
  const doc2 = { id: 'doc2', text: "Don't shoot shoot shoot that thing at me." };
  const doc3 = { id: 'doc3', text: "I'm your shooter." };
  const documents = [doc1, doc2, doc3];

  expect(search(documents, 'shoot')).toEqual(['doc2', 'doc1']);
  expect(search(documents, 'pint')).toEqual(['doc1']);
  expect(search(documents, 'your')).toEqual(['doc3']);
  expect(search(documents, 'none')).toEqual([]);
});