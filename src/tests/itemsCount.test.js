/* eslint-disable no-undef */
/* eslint-disable quote-props */
import itemsCounter from '../function/itemsCounter.js';

global.fetch = () => Promise.resolve({
  json: () => Promise.resolve([{
    'id': 1,
    'name': 'Under the Dome',
    'image': {
      'medium': 'https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg',
      'original': 'https://static.tvmaze.com/uploads/images/original_untouched/81/202627.jpg',
    },
  },
  {
    'id': 2,
    'name': 'Person of Interest',
    'image': {
      'medium': 'https://static.tvmaze.com/uploads/images/medium_portrait/163/407679.jpg',
      'original': 'https://static.tvmaze.com/uploads/images/original_untouched/163/407679.jpg',
    },
  },
  {
    'id': 3,
    'name': 'Bitten',
    'image': {
      'medium': 'https://static.tvmaze.com/uploads/images/medium_portrait/0/15.jpg',
      'original': 'https://static.tvmaze.com/uploads/images/original_untouched/0/15.jpg',
    },
  },
  {
    'id': 4,
    'name': 'Arrow',
    'image': {
      'medium': 'https://static.tvmaze.com/uploads/images/medium_portrait/213/534017.jpg',
      'original': 'https://static.tvmaze.com/uploads/images/original_untouched/213/534017.jpg',
    },
  }]),
});

global.shows = [{
  'id': 1,
  'name': 'Under the Dome',
  'image': {
    'medium': 'https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg',
    'original': 'https://static.tvmaze.com/uploads/images/original_untouched/81/202627.jpg',
  },
},
{
  'id': 2,
  'name': 'Person of Interest',
  'image': {
    'medium': 'https://static.tvmaze.com/uploads/images/medium_portrait/163/407679.jpg',
    'original': 'https://static.tvmaze.com/uploads/images/original_untouched/163/407679.jpg',
  },
},
{
  'id': 3,
  'name': 'Bitten',
  'image': {
    'medium': 'https://static.tvmaze.com/uploads/images/medium_portrait/0/15.jpg',
    'original': 'https://static.tvmaze.com/uploads/images/original_untouched/0/15.jpg',
  },
},
{
  'id': 4,
  'name': 'Arrow',
  'image': {
    'medium': 'https://static.tvmaze.com/uploads/images/medium_portrait/213/534017.jpg',
    'original': 'https://static.tvmaze.com/uploads/images/original_untouched/213/534017.jpg',
  },
}];

describe('shows list counter', () => {
  test('this list api had four items', () => {
    // Arrange
    let count = 0;
    // Act
    count = itemsCounter(shows);

    // Assert
    expect(count).toBe(4);
  });
});
