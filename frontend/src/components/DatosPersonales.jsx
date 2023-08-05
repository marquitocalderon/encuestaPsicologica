import React from "react";
import { useForm, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function DatosPersonales({ onSubmit, onRetroceder ,datosPersonales  }) {
  const {
    control,
    handleSubmit:handleSubmitDatosPersonales,
    formState: { errors },
  } = useForm({
    defaultValues: datosPersonales,
  });



  return (
    <form onSubmit={handleSubmitDatosPersonales(onSubmit)}>
      <Controller
        name="nombre"
        control={control}
        defaultValue=""
        rules={{ required: "Este campo es requerido" }}
        render={({ field }) => (
          <TextField
            {...field}
            label="Nombre"
            variant="outlined"
            error={!!errors.nombre}
            helperText={errors.nombre ? errors.nombre.message : null}
          />
        )}
      />

      <Controller
        name="edad"
        control={control}
        defaultValue=""
        rules={{
          required: "Este campo es requerido",
          pattern: {
            value: /^[0-9]+$/,
            message: "Edad inválida",
          },
        }}
        render={({ field }) => (
          <TextField
            {...field}
            label="Edad"
            variant="outlined"
            error={!!errors.edad}
            helperText={errors.edad ? errors.edad.message : null}
          />
        )}
      />

      <Controller
        name="idusuario"
        control={control}
        defaultValue=""
        rules={{ required: "Este campo es requerido" }}
        render={({ field }) => (
          <TextField
            {...field}
            label="ID Usuario"
            variant="outlined"
            error={!!errors.idusuario}
            helperText={errors.idusuario ? errors.idusuario.message : null}
          />
        )}
      />

      <Button type="submit" variant="contained" color="primary">
        Guardar y Continuar
      </Button>
      <Button onClick={onRetroceder} variant="contained" color="secondary">
        Retroceder
      </Button>
    </form>
  );
}
