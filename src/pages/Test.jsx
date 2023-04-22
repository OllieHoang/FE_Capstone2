import React, { useState } from 'react';

const Test = () => {
    const [content, setContent] = useState();
    const [contents, setContents] = useState([]);

    const handleSubmit = () => {
        setContents((prev) => [...prev, content]);
    };
    return (
        <div className="p-32">
            <input
                type="text"
                value={content}
                onChange={(e) => {
                    setContent(e.target.value);
                }}
            />
            <button onClick={handleSubmit}>add</button>
            <ul>
                {contents.map((content, ind) => {
                    return <li key={ind}>{content}</li>;
                })}
            </ul>
        </div>
    );
};

export default Test;
