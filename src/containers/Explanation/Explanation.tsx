import { Box, Typography } from "@mui/material";
import { ButtonGroup } from "../../components/ButtonGroup";
import { buttonData } from "./buttonData";
import room from "../../assets/img/room.jpg";
import { Label } from "./Label/Label";

export const Explanation = () => {
  return (
    <Box sx={{ width: "1400px", margin: "0 auto" }}>
      <Typography variant="h2" mb={7.5}>
        Из чего состоит уборка
      </Typography>

      <Box mb={7.5}>
        <ButtonGroup data={buttonData} />
      </Box>

      <Box sx={{ position: "relative", width: "1400px", height: "820px" }}>
        <img src={room} alt="room" width={"100%"} height={"100%"} />
        <Label
          title="Помоем подоконники, батареи, двери, ручки,выключатели"
          width="321px"
          size="medium"
          coordinate={{ top: "146px", left: "100px" }}
        />
        <Label
          title="Почистим зеркала"
          width="261px"
          size="large"
          coordinate={{ top: "117px", left: "566px" }}
        />
        <Label
          title="заправим кровати поменяем постельное белье"
          width="361px"
          size="small"
          coordinate={{ top: "473px", left: "51px" }}
        />
        <Label
          title="Сложим аккуратно вещи"
          text="( р-р до 1м.кв., если р-р зеркала больше, то закажи доп. услугу)"
          width="318px"
          coordinate={{ top: "271px", left: "447px" }}
        />
        <Label
          title="Вынесем мусор"
          width="230px"
          size="large"
          coordinate={{ top: "367px", left: "815px" }}
        />
        <Label
          title="Вытрем пыль со всех открытых поверхностей"
          width="323px"
          size="small"
          coordinate={{ top: "495px", left: "1014px" }}
        />
        <Label
          title="Помоем полы и плинтус"
          width="323px"
          size="large"
          coordinate={{ top: "670px", left: "675px" }}
        />
      </Box>
    </Box>
  );
};
