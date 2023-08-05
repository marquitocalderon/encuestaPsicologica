import React from "react";
import { useForm } from "react-hook-form";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DatosPersonales from "./DatosPersonales"; // Import the DatosPersonales component
import Psicologia from "./Psicologia";

export default function Prueba1() {
  const [activarStep, setActivarStep] = React.useState(0);
  const [datosPersonales, setDatosPersonales] = React.useState({});
  const [psicologiaData, setPsicologiaData] = React.useState({});

  const onSubmitDatosPersonales = (data) => {
    console.log("Datos Personales", data);
    setDatosPersonales(data);
    funcionSiguiente();
  };

  const onSubmitPsicologia = (data2) => {
    console.log("Alcoholismo", data2);
    setPsicologiaData(data2);
  };

  const funcionSiguiente = () => {
    if (activarStep < 1) {
      setActivarStep((siguiente) => siguiente + 1);
    }
  };

  const funcionRetroceder = () => {
    if (activarStep > 0) {
      setActivarStep((retroceder) => retroceder - 1);
    }
  };

  return (
    <div>
      <Stepper activeStep={activarStep}>
        <Step>
          <StepLabel>Datos Personales</StepLabel>
        </Step>
        <Step>
          <StepLabel>Psicología</StepLabel>
        </Step>
      </Stepper>

      {activarStep === 0 && (
        <Box>
          <Typography variant="h6">Datos Personales</Typography>
          <DatosPersonales onSubmit={onSubmitDatosPersonales} onRetroceder={funcionRetroceder} />
        </Box>
      )}

      {activarStep === 1 && (
        <Box>
          <Typography variant="h6">Psicología</Typography>
          <Psicologia onSubmit={onSubmitPsicologia} onRetroceder={funcionRetroceder} />
        </Box>
      )}

      {/* Imprimir en consola los objetos */}
      <Typography variant="h6">Datos Personales:</Typography>
      <pre>{JSON.stringify(datosPersonales, null, 2)}</pre>
      <Typography variant="h6">Psicología:</Typography>
      <pre>{JSON.stringify(psicologiaData, null, 2)}</pre>
    </div>
  );
}
