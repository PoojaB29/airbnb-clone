import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import JsonData from './MOCK_DATA.json';  
import {useHistory} from 'react-router-dom';
import './Header.css';


export default function Location(){
  const defaultProps = {
    options: JsonData,
    getOptionLabel: (option) => `${option.street_address}, ${option.city}, ${option.country} `,
  };
  const [value, setValue] = React.useState(null);
  const history = useHistory();
    return (
      <div style={{ width: 250 }}>
       <Autocomplete
        {...defaultProps}
        id="controlled-demo"
        append-icon="false"
        value={value}
        onChange={() => history.push('./search')}
        renderInput={(params) => <TextField {...params} InputProps={{...params.InputProps, disableUnderline: true}} label="Where are you going?" margin="normal"  />}
      />
      </div>
    );
    
}

