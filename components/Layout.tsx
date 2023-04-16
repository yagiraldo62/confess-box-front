import { GoogleLogin } from "react-google-login"; 
import { Typography, Container, Box } from "@mui/material";

const Login = () => {
  const responseGoogle = (response: any) => {
    console.log(response);
  };

  const onFailure = (error: any) => {
    console.log(error);
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          mt: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Iniciar sesión con Google
        </Typography>
        <GoogleLogin
          clientId="TU_ID_DE_CLIENTE_DE_GOOGLE"
          buttonText="Iniciar sesión con Google"
          onSuccess={responseGoogle}
          onFailure={onFailure}
          cookiePolicy={"single_host_origin"}
        />
      </Box>
    </Container>
  );
};

export default Login;
