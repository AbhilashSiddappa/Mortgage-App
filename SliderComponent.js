import React from 'react'
import { Slider, Stack, Typography } from '@mui/material';

function SliderComponent({defaultValue,min,max,step,value,onChange,label,unit,amount,amountright,amountleft}) {
  return (
    <>
      <Stack gap={1} justifyContent={"flex-start"}>
        <Typography variant="subtitle2">{label}</Typography>
        <Typography variant="h5">
          {unit}
          {amount}
        </Typography>
      </Stack>
      <Slider
        defaultValue={defaultValue}
        max={max}
        min={min}
        valueLabelDisplay="auto"
        step={step}
        marks
        value={value}
        onChange={onChange}
      />
      <Stack gap={1} justifyContent={"space-between"} direction={"row"}>
        <Typography variant="caption" color="text.secondary">
          {unit}
          {amountleft}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {unit}
          {amountright}
        </Typography>
      </Stack>
    </>
  );
}

export default SliderComponent