import { useState } from "react";
import ElementTransferStle from "../ElementTransfer/ElementTransfer.module.css";

const ElementTransfer = () => {

    const [bucket1, setBucket1] = useState(["Task-1", "Task-2", "Task-3", "Task-4"]);
    const [bucket2, setBucket2] = useState([]);
    const [itemclick, setItemclick] = useState([]);

    const handleItemClick = (item) => {

        setItemclick((prev) => {
            const updatedItemclick = [...prev, item];
            console.log(updatedItemclick);
            return updatedItemclick;
        });
    }

    const handleAdd = () => {
        if (itemclick.length > 0) {
           
            if (bucket1.some(item => itemclick.includes(item))) {
          
                setBucket1((prev) => prev.filter(item => !itemclick.includes(item)));
                setBucket2((prev) => [...prev, ...itemclick]);
            } else {
                
                setBucket2((prev) => prev.filter(item => !itemclick.includes(item))); 
                setBucket1((prev) => [...prev, ...itemclick]); 
            }
    
        
            setItemclick([]);
        }
    };
    

    const handleRemove = () => {
        if (itemclick.length > 0) {


    if (bucket1.some(item => itemclick.includes(item))) {
          
        setBucket1((prev) => prev.filter(item => !itemclick.includes(item)));
        setItemclick([])
      
    } else {
        
        setBucket2((prev) => prev.filter(item => !itemclick.includes(item))); 
        setItemclick([])
    }
        }
    };

    const handleAddAll = () => {
        setBucket2((prev) => {
            const uniqueItems = bucket1.filter(item => !prev.includes(item));
            return [...prev, ...uniqueItems]; 
        });
        setBucket1((prev) => {
            const uniqueItems = bucket2.filter(item => !prev.includes(item));
            return [...prev, ...uniqueItems]; 
        });
    };

    const handleRemoveAll = () => {
        setBucket1([]);
        setBucket2([]);
    };

    return (
        <>
        <div className={ElementTransferStle.main}>
            <div className={ElementTransferStle.container}>
                <div className={ElementTransferStle.bucket1}>
                    <h3>Bucket - A</h3>
                    {bucket1.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => handleItemClick(item)}
                            className={itemclick.includes(item) ? ElementTransferStle.selected : ""}
                        >
                            {item}
                        </div>
                    ))}
                </div>
                <div className={ElementTransferStle.Buttons}>
                    <button onClick={handleAdd}>Add</button>
                    <button onClick={handleAddAll}>AddAll</button>
                    <button onClick={handleRemove}>Remove</button>
                    <button onClick={handleRemoveAll}>RemoveAll</button>
                </div>
                <div className={ElementTransferStle.bucket2}>
                    <h3>Bucket - B</h3>
                    {bucket2.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => handleItemClick(item)}
                            className={itemclick.includes(item) ? ElementTransferStle.selected : ""}
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </div>
            </div>
        </>
    );
}

export default ElementTransfer;
