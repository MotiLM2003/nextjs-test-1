import React from 'react';
import Link from 'next/link';
import moment from 'moment';
import ResouceLabel from './ResourceLabel';
const ResourceHighlight = ({ resources }) => {
  return (
    <section className='section'>
      <div>
        {resources.map((resource) => {
          return (
            <div key={resource.id} className='column is-8 is-offset-2'>
              <div className='content is-medium'>
                <h2 className='subtitle is-4'>
                  {moment(resource.createdAt).format('LLLL')}
                  <ResouceLabel status={resource.status} />
                </h2>
                <h1 className='title'>{resource.title}</h1>

                <p>{resource.description}</p>
                <Link href={`/resources/${resource.id}`}>
                  <a className='button is-link'>Edit </a>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ResourceHighlight;
