import { Box, Button, Checkbox, Container, FormControlLabel, Grid, Link, TextField, Typography } from '@mui/material';
import React from 'react'

function Form(props) {
  return (
    <>
        <Container component="main" maxWidth="xs">
            <Box sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                <Typography component="h2" variant="h5">
                    {props.titulo}
                </Typography>
                <Box component='form' sx={{mt: 1}}>
                    <TextField fullWidth margin='normal' label="Email" name="email" variant="outlined" required/>
                    <TextField fullWidth margin='normal' label="Senha" type="password" variant='outlined'required/>
                    <FormControlLabel control={<Checkbox value="remember" color="primary"/>} label="Lembrar-me"/>
                    <Button style={{backgroundColor: props.cor}} fullWidth type='submit' variant="contained" sx={{mt:2, mb: 4,}}>Login</Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" >Esqueci minha senha</Link> 
                        </Grid>
                        <Grid item>
                            <Link href="#" >Não tem uma conta? Cadastre-se</Link> 
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    </>
  )
}

export default Form;