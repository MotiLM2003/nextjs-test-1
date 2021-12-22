import { useState, useEffect } from 'react';
import axios from 'axios';

import Head from 'next/head';
import Image from 'next/image';
import ResourceHighlight from '../components/ResourceHighlight';
import Layout from 'components/Layout';
import Newslatter from 'components/Newslatter';
import ResourceList from 'components/ResourceList';

export default function Home({ resources }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:3001/api/resources');
  }, []);
  return (
    <Layout>
      <section className='hero '>
        <div className='hero-body'>
          <div className='container'>
            <div className='columns'>
              <div className='column is-8 is-offset-2'>
                <figure className='image is-16by9'>
                  <img src='../images/first-post.png' alt='' />
                </figure>
              </div>
            </div>

            <ResourceHighlight resources={resources} />

            <div className='is-divider'></div>
          </div>
        </div>
      </section>

      <Newslatter />
      <ResourceList resources={resources} />
    </Layout>
  );
}

export async function getServerSideProps(state) {
  const response = await fetch('http://localhost:3001/api/resources');
  const data = await response.json();
  return {
    props: {
      resources: data,
    },
  };
}
