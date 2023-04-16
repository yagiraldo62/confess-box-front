import { GoogleLogin } from "react-google-login";
import { Typography, Container, Box } from "@mui/material";
import GoogleLoginButton from "../../components/auth/GoogleAuthButton";
import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next";
import { User } from "../../types/Auth";

type Props = {
  user?: User;
  token?: string;
  success: boolean;
};

export const getStaticPaths: GetStaticPaths = async (context) => {
  return {
    paths: [],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  console.log({ context });

  return {
    props: {},
  };
};

const AuthPage: React.FC<Props> = () => {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          gap: 50,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography component="h1" variant="h5">
            Iniciar sesión con Google{" "}
          </Typography>
          <GoogleLoginButton />
        </Box>
      </Box>
    </Container>
  );
};

export default AuthPage;
