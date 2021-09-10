/* eslint-disable consistent-return */
/* eslint-disable no-return-await */
/* eslint-disable no-console */
const involvementLikesURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/9YYfJY5gRMr3MgkvmC9i/Likes/';

const postLike = async (itemId) => {
  try {
    await fetch(involvementLikesURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        item_id: `item${itemId}`,
      }),
    });
  } catch (error) {
    console.error(error);
  }
};

const fetchData = async (url) => {
  const res = await fetch(url);
  const result = await res.json();
  return result;
};

export { postLike, fetchData };