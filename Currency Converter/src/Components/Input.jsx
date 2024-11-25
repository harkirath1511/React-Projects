import React from 'react'

function Input({
    label, 
    classname="",
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency,
    amountDisabled = false
}) {
  

  return (
   <>
    <div className={`bg-white p-3 rounded-lg text-sm flex ${classname} `}>
            <div className="w-1/2">
                <label  className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Enter Amount"
                    value={amount}
                    onChange={(e) => onAmountChange(Number(e.target.value))}
                    disabled= {amountDisabled}
                />
            </div>

            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>

                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e)=>onCurrencyChange(e.target.value)}
                >
                {currencyOptions.map((currency =>(
                    <option value={currency} key={currency}>
                        {currency}
                    </option>
                )))}
                </select>

            </div>
        </div>
   </>
  )
}

export default Input

