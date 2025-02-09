import { useEffect, useRef, useState } from 'react';
import Select from 'react-select'

function CurrencyConverter() {
  const [amountEntered, setAmountEntered] = useState('');
  const [amountOne, setAmountOne] = useState(null);
  const [amountTwo, setAmountTwo] = useState(null);
  const [result, setResult] = useState('');


  function handleAmount(e) {
    if(e.target.value <= 1000000000){
      
      setAmountEntered(e.target.value);
    }
 
  }
  function handleAmountOne(selectedOption) {
    setAmountOne(selectedOption);
  }
  function handleAmountTwo(selectedOption) {
    setAmountTwo(selectedOption);
  }

  useEffect(() => {
    if (!amountEntered) {
      setResult('');
      return;
    }
    if (amountEntered !== '' && amountOne && amountTwo){
      setResult((parseFloat(amountEntered) * amountOne.value) / amountTwo.value);
    }
  }, [amountEntered, amountOne, amountTwo]);
  
  const formatNumber = (num) => {
    if (num >= 1_000_000_000) return (num / 1_000_000_000).toFixed(1) + "B";
    if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + "M";
    return num.toString();
  };

  const currencies = [
    { value: 279.60, label: <div><img src="/Flag icons/us.svg" width="20" className="inline-block mr-2" /> USD</div>,  title: "USD" , Symbol: "$", },
    { value: 290.00, label: <div><img src="/Flag icons/eu.svg" width="20" className="inline-block mr-2" /> EUR</div>,  title: "EUR" , Symbol: "€", },
    { value: 346.75, label: <div><img src="/Flag icons/gb.svg" width="20" className="inline-block mr-2" /> GBP</div>,  title: "GBP" , Symbol: "£", },
    { value: 75.85, label: <div><img src="/Flag icons/ae.svg" width="20" className="inline-block mr-2" /> AED</div>,   title: "AED" , Symbol: "د.إ", },
    { value: 74.20, label: <div><img src="/Flag icons/sa.svg" width="20" className="inline-block mr-2" /> SAR</div>,   title: "SAR" , Symbol: "﷼", },
    { value: 896.30, label: <div><img src="/Flag icons/kw.svg" width="20" className="inline-block mr-2" /> KWD</div>,  title: "KWD" , Symbol: "د.ك", },
    { value: 195.60, label: <div><img src="/Flag icons/ca.svg" width="20" className="inline-block mr-2" /> CAD</div>,  title: "CAD" , Symbol: "$", },
    { value: 175.75, label: <div><img src="/Flag icons/au.svg" width="20" className="inline-block mr-2" /> AUD</div>,  title: "AUD" , Symbol: "$", },
    { value: 722.90, label: <div><img src="/Flag icons/om.svg" width="20" className="inline-block mr-2" /> OMR</div>,  title: "OMR" , Symbol: "ر.ع.", },
    { value: 1.85, label: <div><img src="/Flag icons/jp.svg" width="20" className="inline-block mr-2" /> JPY</div>,    title: "JPY" , Symbol: "¥", },
    { value: 62.18, label: <div><img src="/Flag icons/my.svg" width="20" className="inline-block mr-2" /> MYR</div>,   title: "MYR" , Symbol: "RM", },
    { value: 75.93, label: <div><img src="/Flag icons/qa.svg" width="20" className="inline-block mr-2" /> QAR</div>,   title: "QAR" , Symbol: "﷼", },
    { value: 738.60, label: <div><img src="/Flag icons/bh.svg" width="20" className="inline-block mr-2" /> BHD</div>,  title: "BHD" , Symbol: "د.ب", },
    { value: 8.13, label: <div><img src="/Flag icons/th.svg" width="20" className="inline-block mr-2" /> THB</div>,    title: "THB" , Symbol: "฿", },
    { value: 37.59, label: <div><img src="/Flag icons/cn.svg" width="20" className="inline-block mr-2" /> CNY</div>,   title: "CNY" , Symbol: "¥", },
    { value: 35.47, label: <div><img src="/Flag icons/hk.svg" width="20" className="inline-block mr-2" /> HKD</div>,   title: "HKD" , Symbol: "$", },
    { value: 38.06, label: <div><img src="/Flag icons/dk.svg" width="20" className="inline-block mr-2" /> DKK</div>,   title: "BKK" , Symbol: "kr", },
    { value: 155.78, label: <div><img src="/Flag icons/nz.svg" width="20" className="inline-block mr-2" /> NZD</div>,  title: "NZD" , Symbol: "$", },
    { value: 208.25, label: <div><img src="/Flag icons/sg.svg" width="20" className="inline-block mr-2" /> SGD</div>,  title: "SGD" , Symbol: "$", },
    { value: 279.60, label: <div><img src="/Flag icons/us.svg" width="20" className="inline-block mr-2" /> USD</div>,  title: "USD" , Symbol: "$", },
    { value: 24.51, label: <div><img src="/Flag icons/no.svg" width="20" className="inline-block mr-2" /> NOK</div>,   title: "NOK" , Symbol: "kr", },
    { value: 25.13, label: <div><img src="/Flag icons/se.svg" width="20" className="inline-block mr-2" /> SEK</div>,   title: "SEK" , Symbol: "kr", },
    { value: 305.25, label: <div><img src="/Flag icons/ch.svg" width="20" className="inline-block mr-2" /> CHF</div>,  title: "CHF" , Symbol: "CHF", },
    { value: 3.11, label: <div><img src="/Flag icons/in.svg" width="20" className="inline-block mr-2" /> INR</div>,    title: "INR" , Symbol: "₹", },
    { value: 1, label: <div><img src="/Flag icons/pk.svg" width="20" className="inline-block mr-2" /> PK</div>,        title: "PKR" , Symbol: "₨" },
  ];

  return (
    <>
      <div className='font-Montserrat flex items-center justify-start flex-col mt-16 sm:mt-20 sm:p-4 pb-45 sm:pb-56'>


        <div className='flex items-center flex-col justify-center mb-2  border-[1px] border-primary-blue dark:border-zinc-700 py-5 px-1 rounded-xl text-zinc-700'>
          <h1 className='text-2xl sm:text-3xl text-primary-blue dark:text-primary-white p-8 pb-10 font-bold'>Currency Converter</h1>



          <div className='flex  items-center justify-center flex-row pb-4'>
            <input type='number' className='text-center placeholder:text-left focus:outline-none border-b-2 pl-2 placeholder:p-2
             border-b-primary-blue dark:border-b-primary-white text-primary-black dark:text-primary-white' value={amountEntered}
              onChange={handleAmount} min={0} 
              placeholder='Enter Amount'></input>
          </div>

          <div className='flex  items-center justify-center flex-col pb-2'>
            <h4 className='text-center text-xs text-secondary-black dark:text-secondary-white  px-2 pb-4'>From</h4>
            <Select options={currencies} onChange={handleAmountOne}  />
          </div>


          <div className='flex items-center justify-center flex-col pb-2'>
            <h4 className='text-center text-xs text-secondary-black dark:text-secondary-white px-2 pb-4'>To</h4>
            <Select options={currencies} onChange={handleAmountTwo} />
          </div>
          {amountOne && amountTwo && result ? (
            <h3 className='pt-6 text-secondary-white  overflow-hidden text-bold text-2xl text-center'>
              <small className='text-xs text-pr text-secondary-black dark:text-alternate-black '>
               {amountOne.Symbol} {formatNumber(amountEntered)}  is:
              </small>
              <br />
             <span className='text-lime-600 font-semibold'>{amountTwo.Symbol} {formatNumber(result.toFixed(5))}</span>
            </h3>
          ) : null}

          
        </div>
        <small className='text-primary-black text-[10px] dark:text-alternate-black mt-1 w-75 text-center'>* This Currency Converter calculates conversions based on fixed exchange rates as of February 9, 2025.</small>
      </div>
    </>
  )
}

export default CurrencyConverter;