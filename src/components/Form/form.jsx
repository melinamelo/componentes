import { Box, Button, Checkbox, Container, FormControlLabel, Grid, Link, TextField, Typography } from '@mui/material';
import React from 'react'

function Form() {
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
                    Formulário de Login
                </Typography>
                <Box component='form' sx={{mt: 1}}>
                    <TextField fullWidth margin='normal' label="Email" name="email" variant="outlined"/>
                    <TextField fullWidth margin='normal' label="Senha" type="password" variant='outlined'/>
                    <FormControlLabel control={<Checkbox value="remember" color="primary"/>} label="Lembrar-me"/>
                    <Button fullWidth type='submit' variant="contained" sx={{mt:2, mb: 1,}}>Login</Button>
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