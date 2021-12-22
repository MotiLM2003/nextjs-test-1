import Layout from 'components/Layout';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import ResourceForm from 'components/ResourceForm';

const AddResource = () => {
  const router = useRouter();

  const submitForm = (data) => {
    axios
      .post('/api/resources', data)
      .then((response) => {
        console.log('here');
        router.push('/');
      })
      .catch((error) => {});
  };
  return (
    <Layout>
      <ResourceForm onFormSubmit={submitForm} />
    </Layout>
  );
};

export default AddResource;
