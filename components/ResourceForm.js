import React, { useState, useEffect } from 'react';
const default_data = {
  title: 'Some title',
  description: 'description',
  link: 'link',
  priority: 3,
  timeToFinish: 120,
};
const ResourceForm = ({ onFormSubmit, initialValue }) => {
  const [form, setForm] = useState(initialValue || default_data);

  const formChanged = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    onFormSubmit(form);
  };
  const resetForm = () => setForm(default_data);
  return (
    <div className='container'>
      <div className='columns'>
        <div className='column is-8 is-offset-2'>
          <div className='resource-form'>
            <h1 className='title'>Add new Resource</h1>
            <form>
              <div className='field'>
                <label className='label'>Title</label>
                <div className='control'>
                  <input
                    className='input'
                    type='text'
                    placeholder='Learn Next JS and Saint IO'
                    value={form.title}
                    name='title'
                    onChange={formChanged}
                  />
                </div>
              </div>
              <div className='field'>
                <label className='label'>Description</label>
                <div className='control'>
                  <textarea
                    className='textarea'
                    placeholder='Textarea'
                    name='description'
                    value={form.description}
                    onChange={formChanged}
                  ></textarea>
                </div>
              </div>

              <div className='field'>
                <label className='label'>Link</label>
                <div className='control'>
                  <input
                    className='input'
                    name='link'
                    value={form.link}
                    onChange={formChanged}
                    type='text'
                    placeholder='Text input'
                  />
                </div>
              </div>

              <div className='field'>
                <label className='label'>Priority</label>
                <div className='control'>
                  <div className='select'>
                    <select
                      value={form.priority}
                      onChange={formChanged}
                      name='priority'
                    >
                      <option>Select dropdown</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className='field'>
                <label className='label'>Time to finish</label>
                <div className='control'>
                  <input
                    value={form.timeToFinish}
                    onChange={formChanged}
                    name='timeToFinish'
                    className='input'
                    type='number'
                    placeholder='60 (time is in minutes)'
                  />
                </div>
              </div>
              <div className='field is-grouped'>
                <div className='control'>
                  <button className='button is-link' onClick={submitForm}>
                    Submit
                  </button>
                </div>
                <div className='control'>
                  <button
                    className='button is-link is-light'
                    onClick={resetForm}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceForm;
