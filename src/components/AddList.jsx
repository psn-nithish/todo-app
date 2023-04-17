import React, { useEffect, useRef, useState } from 'react'
import 'boxicons';
const AddList = () => {

    const [titleValue, settitleValue] = useState('');
    const [descValue, setDescValue] = useState('');
    // const [showList, setShowList] = useState(false);
    const [todos, setTodos] = useState([]);
    const [count, setCount] = useState([]);
    const [className, setClassName] = useState('');
    const parentRef = useRef(null);

    const [finishedItems, setFinishedItems] = useState([]);




    const submitForm = (event) => {
        event.preventDefault();
        if (titleValue && descValue) {
            setTodos([...todos, { title: titleValue, desc: descValue }]);
            settitleValue('');
            setDescValue('');
            const formData = JSON.parse(localStorage.getItem('formData') || '[]');
            formData.push({ title: titleValue, desc: descValue });
            localStorage.setItem('formData', JSON.stringify(formData));
            console.log(formData);
        }
        // setShowList(true);
    };

    const removeSubmit = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
        const formData = JSON.parse(localStorage.getItem('formData') || '[]');
        formData.splice(index, 1);
        localStorage.setItem('formData', JSON.stringify(formData));
        alert("Removed", index);
    };

    const selectSubmit = (index) => {
        setClassName(className === 'selected' ? '' : 'selected');
        setFinishedItems((prevFinishedItems) => {
            if (prevFinishedItems.includes(index)) {
                return prevFinishedItems.filter((i) => i !== index);
            } else {
                return [...prevFinishedItems, index];
            }
        });
        localStorage.setItem('finishedItems', JSON.stringify(finishedItems));

        console.log(localStorage);
    };


    useEffect(() => {
        const formData = JSON.parse(localStorage.getItem('formData') || '[]');
        setTodos(formData);


        const finishedItemsData = JSON.parse(localStorage.getItem('finishedItems') || '[]');
        setFinishedItems(finishedItemsData);

    }, []);

    return (
        <div className='AddList'>
            <div className="mobileDesign">
                <div className="main-head">
                    <div className="head">
                        <div className="icon">
                            <box-icon name='grid-alt'></box-icon>
                        </div>
                        <div className="title">
                            <h3>Nithish</h3>
                        </div>
                        <div className="icon">
                            <box-icon name='timer'></box-icon>
                        </div>
                    </div>
                    <form className="addInput" onSubmit={submitForm}>
                        <div className="input">
                            <input type="text" value={titleValue} onChange={e => settitleValue(e.target.value)} placeholder='Task Title' />
                            <input type="text" value={descValue} onChange={e => setDescValue(e.target.value)} placeholder='Desc, Date' />
                        </div>
                        <button type='submit'>Create</button>
                    </form>
                </div>
                <div className="body">
                    <div className="title">
                        <h3>Choose Activity <span>({todos.length} List) </span></h3>
                    </div>
                    <div className="List">
                        {todos.map((todo, index) => (
                            <>
                                {/* {showList && */}
                                <div className={`Item ${finishedItems.includes(index) ? 'finishList' : ''}`} key={index} ref={parentRef}>
                                    <div className="content" >
                                        <h5 >{todo.title}</h5>
                                        <p >{todo.desc}</p>
                                    </div>

                                    <div className="icons">
                                        <div className="check" onClick={() => selectSubmit(index)} >
                                            <div className="checked">
                                                <box-icon name='check-square' ></box-icon>
                                            </div>
                                            <div className="unchecked">
                                                <box-icon type='solid' name='check-square'></box-icon>
                                            </div>
                                        </div>
                                        <div className="delete" onClick={() => removeSubmit(index)}>
                                            <box-icon name='x-circle'></box-icon>
                                        </div>
                                    </div>
                                </div>
                                {/* } */}
                            </>

                        ))}


                        {/* <ul>
                            {todos.map((todo, index) => (
                                <li key={index}>{todo}</li>
                            ))}
                        </ul> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddList