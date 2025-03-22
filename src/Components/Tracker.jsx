import React, { useRef, useState, useEffect } from 'react';
import { Delete, Trash2, ArrowDownToLine, ShoppingBasket, CircleDollarSign } from 'lucide-react';

function Tracker() {
    const [Price, setPrice] = useState('');
    const [Itemname, setItemName] = useState('');
    const [rows, setRows] = useState([]);
    const TotalPrice = useRef(0);
    const [FileName, setFileName] = useState('');

    // Load saved data from local storage on mount
    useEffect(() => {
        const savedRows = JSON.parse(localStorage.getItem('trackerRows')) || [];
        setRows(savedRows);

        // Calculate total price from saved data
        const total = savedRows.reduce((sum, row) => sum + parseInt(row.Price), 0);
        TotalPrice.current = total;
    }, []);

    // Save data to local storage whenever rows change
    useEffect(() => {
        localStorage.setItem('trackerRows', JSON.stringify(rows));
    }, [rows]);

    const AddRows = () => {
        if (Price && Itemname) {
            const newRow = { Price, Itemname };
            setRows([...rows, newRow]);
            TotalPrice.current += parseInt(Price);
            setPrice('');
            setItemName('');
        }
    };

    const deleteRow = (index) => {
        const updatedRows = rows.filter((_, i) => i !== index);
        TotalPrice.current -= parseInt(rows[index].Price);
        setRows(updatedRows);
    };

    const DeleteAllRows = () => {
        setRows([]);
        TotalPrice.current = 0;
        localStorage.removeItem('trackerRows'); // Clear local storage
    };

    const downloadTableAsText = () => {
        let textData = "ID\t\tItem\t\tPrice\n";
        rows.forEach((row, i) => {
            textData += `${i + 1}\t\t${row.Itemname}\t\t${row.Price}\n`;
        });

        const blob = new Blob([textData], { type: "text/plain" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = FileName ? `${FileName}.txt` : "receipt.txt";
        document.body.append(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    return (
        <div className='flex items-center justify-center flex-col flex-wrap mt-8 sm:p-4 font-Montserrat'>
            <div className='flex font-normal text-secondary-blue dark:text-secondary-white border-[1px] border-primary-blue dark:border-secondary-white rounded-lg m-6 p-5 flex-col'>
                <div className='flex mt-2 flex-col'>
                    <h1 className='text-lg font-semibold gap-1 flex text-left items-center flex-row pb-2'>
                        <ShoppingBasket size={20} absoluteStrokeWidth={true} /> Item:
                    </h1>
                    <input type='text' className='focus:outline-primary-blue border-[1px] rounded-sm px-2  border-alternate-blue dark:border-secondary-white placeholder:p-2'
                        placeholder='Enter Item Name' value={Itemname} onChange={(e) => setItemName(e.target.value)} />
                </div>
                <div className='flex mt-2 flex-col'>
                    <h1 className='text-lg font-semibold gap-1 flex text-left items-center flex-row pb-2'>
                        <CircleDollarSign size={20} /> Price:
                    </h1>
                    <input type='number' className='focus:outline-primary-blue border-[1px] rounded-sm px-2 border-alternate-blue dark:border-secondary-white placeholder:p-2'
                        placeholder='Enter Item Price' value={Price} onChange={(e) => setPrice(e.target.value)} />
                </div>
                <div className='flex mt-4 items-center justify-center'>
                    <button onClick={AddRows} className='bg-primary-blue dark:bg-primary-white text-primary-white dark:text-primary-black px-3 rounded-sm cursor-pointer'>
                        Add
                    </button>
                </div>
            </div>
            <div className='flex m-6'>
                <table className="border-collapse border-[1px] border-secondary-blue text-alternate-blue dark:border-secondary-white font-Montserrat dark:text-secondary-white text-sm">
                    <thead>
                        <tr className='font-bold'>
                            <td className='border py-2 px-3 text-center'>#</td>
                            <td className='border py-2 px-6 text-center'>Item</td>
                            <td className='border py-2 px-4 text-center'>Price</td>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((row, index) => (
                            <tr key={index}>
                                <td className='border py-2 px-3 text-center'>{index + 1}</td>
                                <td className='border py-2 px-6 text-center'>{row.Itemname}</td>
                                <td className='border py-2 px-6 text-center'>{row.Price}</td>
                                <td className='border py-2 px-4 text-center'>
                                    <button onClick={() => deleteRow(index)} className='cursor-pointer'>
                                        <Trash2 size={20} absoluteStrokeWidth={true} className='text-primary-blue dark:text-secondary-white' />
                                    </button>
                                </td>
                            </tr>
                        ))}
                        <tr className='font-semibold'>
                            <td className='border py-2 px-3 text-center'>Total</td>
                            <td className='border py-2 px-6 text-center'></td>
                            <td className='border py-2 px-6 text-center'>{TotalPrice.current}</td>
                            <td className='border py-2 px-4 text-center'>
                                <button onClick={DeleteAllRows}><Delete /></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='flex font-Montserrat items-center justify-center flex-col'>
                <div className='flex mt-4'>
                    <span className='flex items-center justify-center flex-row border-b-2 border-b-alternate-blue dark:border-b-secondary-white'>
                        <input type='text' value={FileName} onChange={(e) => setFileName(e.target.value)}
                            className='focus:outline-none text-secondary-black dark:text-secondary-white' placeholder='Enter file Name' />
                        <h3 className='text-secondary-black dark:text-secondary-white'>.txt</h3>
                    </span>
                </div>
                <div className='flex mt-6 p-3'>
                    <button className='flex font-semibold items-center justify-center gap-1 cursor-pointer 
                border-2 border-lime-500 rounded-lg py-1 px-3 text-primary-white sm:text-lime-500 bg-lime-500 sm:bg-transparent sm:hover:bg-lime-500 sm:hover:text-primay-white transition delay-50 duration-300
                 hover:text-primary-white ease-in-out' onClick={downloadTableAsText}>
                        Download <ArrowDownToLine size={20} absoluteStrokeWidth={true} />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Tracker;
