import axios from 'axios';

export default async function (req, res) {
  if (req.method === 'GET') {
    const dataRes = await fetch('http://localhost:3001/api/resources');
    const data = await dataRes.json();
    res.json(data);
  } else if (req.method === 'POST') {
    console.log('eere');
    if (isNotValid(req.body)) {
      return res.status(422).send('data is missing');
    }
    try {
      const { data } = await axios.post(
        'http://localhost:3001/api/resources',
        req.body
      );
      res.send(data);
    } catch (err) {
      return res.status(422).send('data cannot be stored.' + err);
    }
  } else if (req.method === 'PATCH') {
    console.log('activate');
    const { id } = req.body;
    if (isNotValid(req.body)) {
      return res.status(422).send('data is missing');
    }
    try {
      console.log('sending data');
      const { data } = await axios.patch(
        `http://localhost:3001/api/resources/${id}`,
        req.body
      );
      res.send(data);
    } catch (err) {
      return res.status(422).send('data cannot be stored.');
    }
  }
}

const isNotValid = ({ title, description, link, timeToFinish, priority }) => {
  return !title || !description || !link || !timeToFinish || !priority;
};
