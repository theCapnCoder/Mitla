import React, { useState } from "react";
import {
  FormControl,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import { DropDown } from "../../../assets/img/DropDown";

interface LanguageSelectorProps {
  // Add any additional props if needed
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>("ru");

  const handleLanguageChange = (event: SelectChangeEvent<string>) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <FormControl sx={{ "& fieldset": { border: "none" } }}>
      <Select
        value={selectedLanguage}
        onChange={handleLanguageChange}
        IconComponent={DropDown}
        displayEmpty
        SelectDisplayProps={{
          style: {
            fontSize: 14,
            fontWeight: 600,
            lineHeight: "22px",
          },
        }}
        sx={{
          "& .MuiSvgIcon-root": {
            width: "14px",
            color: "transparent",
          },
        }}
      >
        <MenuItem value="ru">RU</MenuItem>
        <MenuItem value="en">EN</MenuItem>
        <MenuItem value="es">SP</MenuItem>
        <MenuItem value="fr">FR</MenuItem>
      </Select>
    </FormControl>
  );
};
