import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';

const ActiveResource = () => {
  const [resource, setResource] = useState(null);
  const [seconds, setSeconds] = useState(0);

  const completeResource = () => {
    console.log(' here');
    axios
      .patch('/api/resources', { ...resource, status: 'completed' })
      .then((_) => location.reload());
  };

  useEffect(() => {
    const fetchResource = async () => {
      const { data } = await axios.get('/api/activeresource');
      const resource = data;
      const timeToFinish = parseInt(resource.timeToFinish, 10);
      const elapsedTime = moment().diff(
        moment(resource.activationTime),
        'seconds'
      );
      const updatedTimeTofinish = timeToFinish * 60 - elapsedTime;
      setSeconds(updatedTimeTofinish);
      if (updatedTimeTofinish > 0) {
        resource.timeToFinish = updatedTimeTofinish;
      }

      setResource(resource);
    };

    fetchResource();
  }, []);

  useEffect(() => {
    console.log('timer');
    const timer = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    if (seconds <= 0) {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  }, [seconds]);

  const hasResource = resource?.id;

  const renderContent = () => {
    if (resource) {
      return (
        <React.Fragment>
          <h1 className='resource-name'>{resource.title || ''}</h1>
          <div className='time-wrapper'>
            <h2 className='elapsed-time'>
              {seconds > 0 ? (
                seconds
              ) : (
                <button
                  className='button is-success mt-5'
                  onClick={completeResource}
                >
                  Complete Assigment
                </button>
              )}
            </h2>
          </div>
          <Link href={`/resources/${resource.id}`}>
            <a className='button'>Go to resource</a>
          </Link>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <h1>No resource selected</h1>
          <Link href='/'>
            <a className='button'>Go to resources</a>
          </Link>
        </React.Fragment>
      );
    }
  };

  return <div className='active-resource'>{renderContent()}</div>;
};

export default ActiveResource;
