import React, { useState } from "react";
import {
  FormControl,
  Select,
  MenuItem,
  SelectChangeEvent,
  Typography,
} from "@mui/material";

interface LanguageSelectorProps {
  // Add any additional props if needed
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>("ru");

  const handleLanguageChange = (event: SelectChangeEvent<string>) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <FormControl>
      <Select
        value={selectedLanguage}
        // defaultValue={selectedLanguage}
        // renderValue={(selected) => (
        //   <Typography variant="body1" sx={{backgroundColor: 'red'}}>
        //     {selected === 'en' ? 'English' : selected === 'es' ? 'Spanish' : selected === 'fr' ? 'French' : ''}
        //   </Typography>
        // )}
        onChange={handleLanguageChange}
        // renderValue={() => (
        //   <Typography variant="body1" sx={{ backgroundColor: "red" }}>
        //     Hello
        //   </Typography>
        // )}
        SelectDisplayProps={{
          style: {
            backgroundColor: "yellow",
            color: 'purple',
            fontSize: 10,
          },
        }}
        MenuProps={{
          sx: {
            "& .MuiPaper-root": {
              backgroundColor: "red",
            },
          },
        }}
      >
        <MenuItem value="ru">RU</MenuItem>
        <MenuItem value="en">EN</MenuItem>
        <MenuItem value="es">SP</MenuItem>
        <MenuItem value="fr">FR</MenuItem>
        {/* Add more languages as needed */}
      </Select>
    </FormControl>
  );
};
