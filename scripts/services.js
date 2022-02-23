const BASE_URI = 'https://keepable-api.herokuapp.com';

const getUser = (body) => {
  return fetch(`${BASE_URI}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
}

export { getUser };

