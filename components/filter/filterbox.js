import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useState, useContext } from "react";
import { createContext } from "react";

const FilterContext = createContext();

export { FilterContext };

function Filterbox() {
  const { state, setBoard, setCity, setState, setType, setFees, setCoed } =
    useContext(FilterContext);

  const defaultprops = {
    options: otionsw,
    size: "small",
  };

  return (
    <div style={{ width: 180 }}>
      <p>location *</p>

      <Autocomplete
        {...defaultprops}
        options={stateoptions}
        onChange={(event, value) => setState(value)}
        freeSolo
        renderInput={(params) => (
          <TextField
            {...params}
            label="select Your State "
            placeholder="search your State"
          />
        )}
      />

      {state ? (
        <>
          <p>city *</p>
          <Autocomplete
            {...defaultprops}
            options={cityoptions}
            onChange={(event, value) => setCity(value)}
            freeSolo
            renderInput={(params) => (
              <TextField
                {...params}
                label="select Your City "
                placeholder="search your City"
                id="outlined-error-helper-text"
              />
            )}
          />
        </>
      ) : (
        <> </>
      )}

      <p>Board *</p>
      <Autocomplete
        {...defaultprops}
        options={boardoptions}
        onChange={(event, value) => setBoard(value)}
        freeSolo
        renderInput={(params) => (
          <TextField
            {...params}
            label="select Your Fees "
            placeholder="search your Fees"
          />
        )}
      />

      <p>fees *</p>
      <Autocomplete
        {...defaultprops}
        options={feesoptions}
        onChange={(event, value) => setFees(value)}
        freeSolo
        renderInput={(params) => (
          <TextField
            {...params}
            label="select Your Fees "
            placeholder="search your Fees"
          />
        )}
      />

      <p>coed *</p>
      <Autocomplete
        {...defaultprops}
        options={coedoptions}
        onChange={(event, value) => setCoed(value)}
        freeSolo
        renderInput={(params) => (
          <TextField
            {...params}
            label="select Your coed "
            placeholder="search your coed"
          />
        )}
      />

      <p>type*</p>
      <Autocomplete
        {...defaultprops}
        options={typeoptions}
        onChange={(event, value) => setType(value)}
        freeSolo
        renderInput={(params) => (
          <TextField
            {...params}
            label="select Your type "
            placeholder="search your type"
          />
        )}
      />
    </div>
  );
}

export default Filterbox;

const otionsw = ["njo", "jknj"];

const stateoptions = [
  { code: "AW", label: "Andhra Pradesh" },
  { code: "AW", label: "Arunachal Pradesh" },
  { code: "AW", label: "Assam" },
  { code: "AW", label: "Bihar" },
  { code: "AW", label: "Chhattisgarh" },
  { code: "AW", label: "Goa" },
  { code: "AW", label: "Gujarat" },
  { code: "AW", label: "Haryana" },
  { code: "AW", label: "Himachal Pradesh" },
  { code: "AW", label: "Jammu and Kashmir" },
  { code: "AW", label: "Jharkhand" },
  { code: "AW", label: "Karnataka" },
  { code: "AW", label: "Kerala" },
  { code: "AW", label: "Madhya Pradesh" },
  { code: "AW", label: "Maharashtra" },
  { code: "AW", label: "Manipur" },
  { code: "AW", label: "Meghalaya" },
  { code: "AW", label: "Mizoram" },
  { code: "AW", label: "Nagaland" },
  { code: "AW", label: "Odisha" },
  { code: "AW", label: "Punjab" },
  { code: "AW", label: "Sikkim" },
  { code: "AW", label: "Tamil Nadu" },
  { code: "AW", label: "Tripura" },
  { code: "AW", label: "Uttar Pradesh" },
  { code: "AW", label: "Uttarakhand" },
  { code: "AW", label: "West Bengal" },
];

const feesoptions = [
  "0-25k",
  "25k-50k",
  "50k-75k",
  "75k-1lakh",
  " over 1 lakh",
];

const coedoptions = ["boys", "grils", "coed"];

const optionscity = ["null"];

const boardoptions = ["state", "cbse", "icse"];

const typeoptions = ["primary", "secondary", "highschool"];

const cityoptions = ["null"];
