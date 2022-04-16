import React from 'react';
import google from '../../../../image/google.icon.png';
import facebook from '../../../../image/facebookIcon.png';
import github from '../../../../image/github.png';

const SocialLogin = () => {
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-secondary w-50'>  </div>
                <div></div>
                <p className='px-2 mt-3'>Or</p>
                <div style={{ height: '1px' }} className='bg-secondary w-50'>  </div>

            </div>
            <div className=''>
                <button className='btn btn-info w-50 d-block mx-auto'>
                    <img width={'25px'} src={google} alt="" />
                    <span className='px-2'>Google Sign In</span>
                </button>
                <button className='btn btn-info w-50 d-block my-2 mx-auto'>
                    <img width={'25px'} src={facebook} alt="" />
                    <span className='px-2'>Facebook Sign In</span>
                </button>
                <button className='btn btn-info w-50 d-block mx-auto'>
                    <img width={'25px'} src={github} alt="" />
                    <span className='px-2'>Github Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;