import {useState} from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";
import DatosPersonales from "./DatosPersonales"; // Import the DatosPersonales component
import Psicologia from "./Psicologia";

// Assuming `postDatosPersonales` and `postDatosPsicologia` are correctly imported from "../api/encuestasApi".
import { postDatosPersonales, postDatosPsicologia } from "../api/encuestasApi";

export default function Prueba1() {
  const [activarStep, setActivarStep] = useState(0);
  const [datosPersonales, setDatosPersonales] = useState({});
  const [psicologiaData, setPsicologiaData] = useState({});

  const onSubmitDatosPersonales = (data) => {
    console.log("Datos Personales", data);
    setDatosPersonales(data);
    funcionSiguiente();
  };

  const onSubmitPsicologia = (data2) => {
    console.log("Psicología", data2);
    setPsicologiaData(data2);
    funcionFinalizar(data2);
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

  const funcionFinalizar = async (Psicologia) => {
    console.log("Datos Personales:", datosPersonales);
    console.log("Psicología:", Psicologia);

    try {
      // Enviar datos personales al servidor
      if (Object.keys(datosPersonales).length > 0) {
        await postDatosPersonales(datosPersonales);
        console.log("Datos personales enviados al servidor.");
      }

      if (Object.keys(Psicologia).length > 0) {
        await postDatosPsicologia(Psicologia);
        console.log("Datos personales enviados al servidor.");
      }

    } catch (error) {
      console.error("Error al enviar datos:", error);
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
          <DatosPersonales
            onSubmit={onSubmitDatosPersonales}
            onRetroceder={funcionRetroceder}
            datosPersonales={datosPersonales}
          />
        </Box>
      )}

      {activarStep === 1 && (
        <Box>
          <Typography variant="h6">Psicología</Typography>
          <Psicologia
            guardarPsicologia={onSubmitPsicologia}
            onRetroceder={funcionRetroceder}
            psicologiaData={psicologiaData}
          />
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
