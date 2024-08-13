import React, { useState } from 'react';
import { TextField, Autocomplete } from "@mui/material";
import * as Styled from './styles'
import { PizzaChart } from '../../PizzaChart';
export const DriversDetails = ({ data }) => {
    
    const [selectedDriver, setSelectedDriver] = useState(null);

    const uniqueDrivers = new Set();
    
   
    const options = data
        .map(driver => ({
            label: `${driver['First Name'] || ''} ${driver['Last Name'] || ''}`,
            ...driver 
        }))
        .filter(driver => {
            const key = `${driver['First Name'] || ''} ${driver['Last Name'] || ''}`;
            if (uniqueDrivers.has(key)) {
                return false; 
            }
            uniqueDrivers.add(key);
            return true; 
        });

    return (
        <Styled.Main>
            <h1>🧩 Drivers Events Details</h1>
            <Styled.Left>
        
        <p>Search for a specific driver:</p>
         <Autocomplete
                options={options}
                sx={{ width: 600 }}
                renderInput={(params) => <TextField {...params} />}
                getOptionLabel={(option) => option.label} 
                onChange={(event, newValue) => {
              
                    setSelectedDriver(newValue);
                }}
                value={selectedDriver} 
            />
            </Styled.Left>
     <Styled.Holder>
            {selectedDriver && (
                <div>
                    <h2>Selected Driver:</h2>
                    <p><strong></strong> {selectedDriver['First Name'] +" "+ selectedDriver['Last Name']}</p>
                    <p><strong>WWID:</strong> {selectedDriver['Corporate ID']}</p>
                    <p><strong>Legal Entity Name:</strong> {selectedDriver['Legal Entity Name']}</p>
                    <p><strong>Sector:</strong> {selectedDriver['Sector']}</p>
                   
                </div>
            )}
            {selectedDriver && <PizzaChart data={data} target={selectedDriver['Corporate ID']}/>}
        </Styled.Holder>
        </Styled.Main>
    );
};
