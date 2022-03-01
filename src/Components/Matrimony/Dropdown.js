import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 5;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 200,
    },
  },
};

export default function MultipleSelectCheckmarks({
  catogories,
  catogoriesall,
  setSelected,
}) {
  const [personName, setPersonName] = React.useState([]);
  const [names, setnames] = React.useState([]);

  React.useEffect(() => {
    setnames(catogories);
    console.log(catogories);
  }, [catogories]);

  React.useEffect(() => {
    let m = [];
    let l = catogoriesall.filter(
      (value, index) => personName[index] === value.name
    );
    l.map((val, i) => val.name === personName[i] && m.push(val._id));
    setSelected(m);
  }, [catogoriesall, setSelected, personName]);

  const handleChange = (event) => {
    console.log(event.target.value);
    const {
      target: { value },
    } = event;

    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  return (
    <div>
      <FormControl sx={{ width: 200, marginLeft: 2 }}>
        <InputLabel
          id="demo-multiple-checkbox-label"
          sx={{ marginTop: "-7px", fontSize: 14 }}
        >
          Select Category
        </InputLabel>
        <Select
          sx={{
            width: 200,
            height: 38,
            fontSize: 14,
            border: "1px solid green",
            borderStyle: "none",
            //  boxShadow:"none,"
          }}
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {names.map((name, index) => (
            <MenuItem
              key={index}
              value={name}
              sx={{
                margin: 0,
                fontSize: 5,
                // padding:0,
              }}
              primaryTypographyProps={{ height: 58 }}
            >
              <Checkbox
                checked={personName.indexOf(name) > -1}
                sx={{
                  padding: 1,
                  marginLeft: -1,
                }}
              />
              <ListItemText
                primary={name}
                sx={
                  {
                    // fontSize : 0.5 ,
                    // fontWeight:"4px",
                    // color:"green,
                  }
                }
                primaryTypographyProps={{ fontSize: "14px" }}
              />
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <span>
        {personName.map((item, ind) => {
          return (
            <span
              key={ind}
              style={{
                marginLeft: "10px",
                backgroundColor: "#ff000070",
                padding: "5px",
                borderRadius: "2px",
              }}
            >
              <span
                style={{
                  marginRight: "5px",
                  fontSize: "14px",
                }}
              >
                {item}
              </span>
              <span
                style={{ cursor: "pointer", fontSize: "16px" }}
                onClick={() =>
                  setPersonName(
                    personName.filter((value, index) => index !== ind)
                  )
                }
              >
                x
              </span>
            </span>
          );
        })}
      </span>
    </div>
  );
}
