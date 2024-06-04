import { useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import { useFilterContext } from "../../context";

const RangeSlider = () => {
  const { updateHeightRange } = useFilterContext();
  const [value, setValue] = useState([150, 200]);

  const handleRangeChange = (event, newValue) => {
    setValue(newValue);
    updateHeightRange(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Typography variant="h6" gutterBottom>
        Height Range (cm)
      </Typography>
      <Slider
        value={value}
        onChange={handleRangeChange}
        valueLabelDisplay="auto"
        min={150}
        max={200}
        step={1}
        sx={{
          color: "blue",
          "& .MuiSlider-thumb": {
            backgroundColor: "#FFFFFF",
          },
          "& .MuiSlider-track": {
            backgroundColor: "#576791",
          },
          "& .MuiSlider-rail": {
            backgroundColor: "#e0e0e0",
          },
        }}
      />
    </Box>
  );
};

export default RangeSlider;
