import axios from 'axios';
export default async function ActiveResource(req, res) {
  const { data } = await axios.get('http://localhost:3001/api/activeresource');
  res.send(data);
}
