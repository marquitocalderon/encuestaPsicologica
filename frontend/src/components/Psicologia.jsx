import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Psicologia({ guardarPsicologia, onRetroceder , psicologiaData }) {
  const {
    control,
    handleSubmit: handleSubmitPsicologia,
    formState: { errors },
  } = useForm({
    defaultValues: psicologiaData
  });

  

  return (
    <form onSubmit={handleSubmitPsicologia(guardarPsicologia)}>
      <Controller
        name="alcholismo"
        control={control}
        defaultValue=""
        rules={{ required: 'Este campo es requerido' }}
        render={({ field }) => (
          <TextField
            {...field}
            label="alcholismo"
            variant="outlined"
            error={!!errors.alcoholism}
            helperText={errors.alcoholism ? errors.alcoholism.message : null}
          />
        )}
      />

      <Controller
        name="idusuario"
        control={control}
        defaultValue=""
        rules={{ required: 'Este campo es requerido' }}
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
        Finalizar
      </Button>

      <Button onClick={onRetroceder} variant="contained" color="secondary">
        Retroceder
      </Button>
    </form>
  );
}
