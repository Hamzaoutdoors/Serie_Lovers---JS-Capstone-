/* eslint-disable consistent-return */
/* eslint-disable no-return-await */
/* eslint-disable no-console */
const involvementLikesURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Ng5U76WLJamDi8o1N7mp/Likes/';

const postLike = async (itemId) => {
  try {
    const response = await fetch(involvementLikesURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        item_id: `item${itemId}`,
      }),
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

const getLikes = async () => {
  const res = await fetch(involvementLikesURL);
  const result = await res.json();
  return result;
};

export { postLike, getLikes };