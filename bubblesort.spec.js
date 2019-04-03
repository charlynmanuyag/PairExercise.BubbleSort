'use script';
describe('Bubble Sort', function() {
  it('handles an empty array', function() {
    expect(bubbleSort([])).toEqual([]);
  });
  it('handles a one-element array', function() {
    expect(bubbleSort([1])).toEqual([1]);
  });
  it('handles more than one element in an array', function() {
    expect(bubbleSort([4, 3, 7, 1, 5])).toEqual([1, 3, 4, 5, 7]);
  });
  it('handles an array with the repeated elements', function() {
    expect(bubbleSort([1, 5, 3, 6, 2, 3, 1])).toEqual([1, 1, 2, 3, 3, 5, 6]);
  });
  it('output array length is equal to the input array length', function() {
    expect(bubbleSort([1, 5, 3, 6, 2, 3, 1]).length).toEqual(7);
  });
});
