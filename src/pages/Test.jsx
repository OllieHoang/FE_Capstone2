import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

function Test() {
    const [name, setName] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);

    const submitForm = () => {};

    return (
        <div className="App">
            <form>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

                <button onClick={submitForm}>Submit</button>
            </form>
        </div>
    );
}

export default Test;
