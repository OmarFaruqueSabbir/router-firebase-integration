import { getApp } from 'firebase/app';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';

const auth = getApp(app)


const Products = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
            <h2>Knock Knock! who is there</h2>
            <h5>{user? user.displayName : 'nobody'}</h5>
        </div>
    );
};

export default Products;