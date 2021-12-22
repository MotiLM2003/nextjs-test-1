import React from 'react';
import axios from 'axios';
import Layout from 'components/Layout';
import ResourceForm from 'components/ResourceForm';
import { useRouter } from 'next/router';
const Edit = ({ resource }) => {
  const router = useRouter();
  const submitForm = (data) => {
    axios
      .patch(`http://localhost:3001/api/resources/${data.id}`, data)
      .then((response) => {
        router.push('/');
      })
      .catch((error) => {});
  };
  return (
    <Layout>
      <ResourceForm onFormSubmit={submitForm} initialValue={resource} />
    </Layout>
  );
};

export default Edit;

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
