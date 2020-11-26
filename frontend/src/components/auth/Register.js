import React, { useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';

const Register = ({ isAuthenticated, setAlert, register }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [uploading, setUploading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setAlert('Invalid Password', 'danger');
    } else {
      register({ name, email, password });
    }
  };

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('image', file);
    setUploading(true);

    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      };

      const { data } = await axios.post('/api/v1/upload', formData, config);

      setImage(data);
      setUploading(false);
    } catch (error) {
      console.error(error);
      setUploading(false);
    }
  };

  return (
    <div className='container mt-4'>
      <div className='row'>
        <div className='col-md-6 mx-auto'>
          <form
            className='text-center border border-light p-5'
            onSubmit={handleSubmit}
          >
            <p className='h4 mb-4'>Register</p>
            <input
              className='form-control form-control-lg mb-4'
              placeholder='Name'
              type='name'
              name='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className='form-control form-control-lg mb-4'
              placeholder='Email Address'
              type='email'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className='form-control form-control-lg mb-4'
              placeholder='Password'
              type='password'
              name='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              className='form-control form-control-lg mb-4'
              placeholder='Confirm Password'
              type='password'
              name='confirmPassword'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            {/* ERROR THAT STOPED THIS PROJECT: image field is required even after the image was uploaded */}
            <input
              id='image'
              className='form-control form-control-lg mb-4'
              placeholder='Enter image URL'
              type='text'
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />

            <input
              className='form-control-file mb-4'
              placeholder='Choose file'
              type='file'
              name='image'
              onChange={uploadFileHandler}
            />
            <button className='btn btn-info btn-block my-4' type='submit'>
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { register, setAlert })(Register);
