import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ComboBox() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={fiscalYear}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Fiscal Y/Q" />}
    />
  );
}
const fiscalYear = [{label:"FY'23 Q1"},{label:"FY'22 Q4"},{label:"FY'22 Q3"},{label:"FY'22 Q2"},{label:"FY'22 Q1"},{label:"FY'21 Q4"}]