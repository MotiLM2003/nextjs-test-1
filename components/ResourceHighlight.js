import React from 'react';

const ResourceHighlight = ({ resources }) => {
  return (
    <section className='section'>
      <div>
        {resources.map((resource) => {
          return (
            <div key={resource.id} className='column is-8 is-offset-2'>
              <div className='content is-medium'>
                <h2 className='subtitle is-4'>{resource.createdAt}</h2>
                <h1 className='title'>{resource.title}</h1>
                <p>{resource.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ResourceHighlight;
