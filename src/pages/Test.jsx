import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Test = () => {
    const notify = () => {
        toast.success('da click');
    };

    return (
        <div>
            <button onClick={notify}>bam vo</button>
            <ToastContainer />
        </div>
    );
};

export default Test;
