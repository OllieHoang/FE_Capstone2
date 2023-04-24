import React, { createContext, useState } from 'react';

export const CreateLinkAccountContext = createContext();

const CreateLinkAccountProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [title, setTitle] = useState('');
    const [id, setId] = useState(0);
    const [urlInput, setUrlInput] = useState('');

    //Link
    const handleAddToCart = () => {
        const newCart = [...cart, { urlInput: urlInput, title: title, id: id }];
        setCart(newCart);
        setId(id + 1);
        setUrlInput('');
    };
    const handleInput = (e) => {
        setTitle(e.target.value);
    };
    const handleUpdateTitle = (id, newTitle) => {
        const updatedCart = cart.map((item) => {
            if (item.id === id) {
                return { ...item, title: newTitle };
            }
            return item;
        });
        setCart(updatedCart);
    };

    const removeCart = (id) => {
        const newCart = cart.filter((item) => {
            return item.id !== id;
        });
        setCart(newCart);
    };
    const clearCart = () => {
        setCart([]);
    };
    //appearance
    const [profileTitle, setProfileTitle] = useState('');
    const handleProfileTitle = (e) => {
        setProfileTitle(e.target.value);
    };
    const [inputValueIntroduction, setInputValueIntroduction] = useState('');
    const maxInputLength = 70;
    function handleInputChange(event) {
        const value = event.target.value;
        setInputValueIntroduction(value.slice(0, maxInputLength));
    }

    //toggle
    const [checked, setChecked] = useState(true);

    const toggleChecked = () => {
        setChecked(!checked);
    };

    //selectImg
    const [selectedFile, setSelectedFile] = useState(null);
    // const [isFilePicked, setIsFilePicked] = useState(false)
    // const [selectedFile2, setSelectedFile2] = useState(null);
    const handleFileInput = (e) => {
        setSelectedFile(e.target.files[0]);
        // setIsFilePicked(true)
    };

    return (
        <CreateLinkAccountContext.Provider
            value={{
                cart,
                urlInput,
                title,
                id,
                profileTitle,
                inputValueIntroduction,
                maxInputLength,
                checked,
                selectedFile,
                handleFileInput,
                setChecked,
                toggleChecked,
                handleInputChange,
                setId,
                handleInput,
                handleProfileTitle,
                setTitle,
                setUrlInput,
                setCart,
                handleAddToCart,
                removeCart,
                clearCart,
                handleUpdateTitle,
            }}
        >
            {children}
        </CreateLinkAccountContext.Provider>
    );
};

export default CreateLinkAccountProvider;

// const cartItem = cart.find((item) => {
//     return item.id === id;
// });
// if (cartItem) {
//     const newCart = [...cart].map((item) => {
//         if (item.id === id) {
//             return { ...item, amount: cartItem.amount + 1 };
//         } else {
//             return item;
//         }
//     });
//     setCart(newCart);
// } else {
//     setCart([...cart, newItem]);
// }
