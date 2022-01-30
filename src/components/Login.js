import React from 'react';
import {LockClosedIcon} from '@heroicons/react/solid'
import {useDispatch} from 'react-redux';
import {login,logout} from '../features/user';

const Login=() => {

    const dispatch=useDispatch()

    return (<div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">

            <form className="mt-8 space-y-6" action="#" >



                <div>
                    <button
                        onClick={() => {dispatch(login({name: "clark",email: "kent",age: 37}))}}
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    >
                        <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                            <LockClosedIcon className="h-5 w-5 text-yellow-500 group-hover:text-yello-200" aria-hidden="true" />
                        </span>
                        Update
                    </button>
                    <div className='py-2' />
                    <button
                        onClick={() => {dispatch(logout())}}
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    >
                        <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                            <LockClosedIcon className="h-5 w-5 text-yellow-500 group-hover:text-yello-200" aria-hidden="true" />
                        </span>
                        Delete
                    </button>
                </div>
            </form>
        </div>
    </div>)

};

export default Login;
