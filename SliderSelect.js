import React from 'react'
import SliderComponent from './common/SliderComponent'

function SliderSelect({data,setData}) {
  const bank_limit=10000;
  return (
    <>
      {/* Home Value */}
      <SliderComponent
        amount={data.homeValue}
        label={"Home Value"}
        defaultValue={data.homeValue}
        value={data.homeValue}
        max={bank_limit}
        min={1000}
        step={1000}
        onChange={(e, value) => {
          setData({ ...data, 
            downPayment:value *0.2,
            loanAmount:value*0.8,
            homeValue: value });
        }}
        unit="$"
        amountleft={1000}
        amountright={10000}
      />
      {/* downPayment */}
      <SliderComponent
        amount={data.downPayment}
        label={"Down Payment"}
        defaultValue={data.downPayment}
        value={data.downPayment}
        max={bank_limit}
        min={0}
        step={100}
        onChange={(e, value) => {
          setData({ ...data, 
            loanAmount:data.homeValue-value,
            downPayment: value });
        }}
        unit="$"
        amountleft={0}
        amountright={data.homeValue}
      />
      {/* Loan Amount */}
      <SliderComponent
        amount={data.loanAmount}
        label={"Loan Amount"}
        defaultValue={data.loanAmount}
        value={data.loanAmount}
        max={bank_limit}
        min={1000}
        step={1000}
        onChange={(e, value) => {
          setData({ ...data, 
            downPayment:data.homeValue-value,
            loanAmount: value });
        }}
        unit="$"
        amountleft={1000}
        amountright={10000}
      />
      {/* Interest Rate */}
      <SliderComponent
        amount={data.interestRate}
        label={"Interest Rate"}
        defaultValue={data.interestRate}
        value={data.interestRate}
        max={18}
        min={2}
        step={0.5}
        onChange={(e, value) => {
          setData({ ...data, interestRate: value });
        }}
        unit="%"
        amountleft={2}
        amountright={18}
      />
    </>
  );
}

export default SliderSelect