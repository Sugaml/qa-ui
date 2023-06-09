import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import React from 'react'
import { connect } from 'react-redux';
import { loginResponse } from '../../Services/Actions/account';

function Account(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const dataLoginRequest = {
      username: data.get("email"),
      password: data.get("password"),
    }
    props.login(dataLoginRequest)
  };
  return (
    <Container component="main" maxWidth="lg">
    <Box
      sx={{
        marginTop: 8,
      }}
    >
      <Grid container>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(data:image/jpeg;base64,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)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          component={Paper}
          elevation={6}
          square
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  </Container>
  )
  
}

const mapStateToProps = ({ naxa }) => ({
    naxaData:naxa
});

const mapDispatchtoProps = (dispatch) => {
  return {
    login: (payload) => dispatch(loginResponse(payload)),
  };
};

// export default KeyHighlites

export default connect(mapStateToProps, mapDispatchtoProps)(Account)

