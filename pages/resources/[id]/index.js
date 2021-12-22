import Layout from 'components/Layout';
import React from 'react';
import { useRouter } from 'next/router';
import { route } from 'next/dist/server/router';
import Link from 'next/link';
import axios from 'axios';
import moment from 'moment';

import ResourceLabel from 'components/ResourceLabel';
const ResourceDetails = (props) => {
  const { resource } = props;
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const activateResouce = () => {
    axios
      .patch('/api/resources', { ...resource, status: 'active' })
      .then((_) => location.reload());
  };
  const { createdAt, title, description, timeToFinish, status } = resource;
  return (
    <Layout>
      <div className='column is-8 is-offset-2'>
        <div className='content is-medium'>
          <h2 className='subtitle is-4'>
            {moment(resource.createdAt).format('LLLL')}{' '}
            <ResourceLabel status={status} />
          </h2>
          <h1 className='title'>{title}</h1>
          <p>{description}</p>
          <p>Time to finish: {timeToFinish}</p>
          <Link href={`/resources/${resource.id}/edit`}>
            <a className='button is-warning m-1'>Update</a>
          </Link>
          <button onClick={activateResouce} className='button is-success m-1'>
            Activate
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default ResourceDetails;

// export async function getServerSideProps(context) {
//   const { id } = context.params;
//   const response = await fetch(`http://localhost:3001/api/resources/${id}`);
//   const data = await response.json();
//   console.log(id);
//   return {
//     props: {
//       resource: data,
//     },
//   };
// }

// export async function getStaticPaths() {
//   const response = await fetch(`http://localhost:3001/api/resources`);
//   const data = await response.json();

//   const paths = data.map((r) => {
//     return {
//       params: { id: r.id.toString() },
//     };
//   });

//   console.log(paths);
//   return {
//     paths,
//     fallback: true,
//   };
// }

export async function getServerSideProps(context) {
  const { id } = context.params;
  const response = await fetch(`http://localhost:3001/api/resources/${id}`);
  const data = await response.json();
  return {
    props: {
      resource: data,
    },
  };
}
