/* eslint-disable no-undef */
/* eslint-disable quote-props */
import itemsCounter from '../function/itemsCounter.js';

global.comments = [{
  'item_id': 'item1',
  'username': 'Jane',
  'comment': 'Hello',
},
{
  'item_id': 'item1',
  'username': 'Jane',
  'comment': 'Hello',
},
{
  'item_id': 'item1',
  'username': 'Jane',
  'comment': 'Hello',
},
{
  'item_id': 'item1',
  'username': 'Jane',
  'comment': 'Hello',
}];

describe('shows list counter', () => {
  test('this list api had four items', () => {
    // Arrange
    let count = 0;
    // Act
    count = itemsCounter(comments);

    // Assert
    expect(count).toBe(4);
  });
});
