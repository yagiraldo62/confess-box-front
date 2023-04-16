import React from "react";
import Button from "@mui/material/Button";
import GoogleIcon from "@mui/icons-material/Google";

const GoogleLoginButton: React.FC = () => {
  const loginWithGoogleUrl = `${process.env.API_URL}/auth/google`;
  return (
    <Button
      variant="contained"
      color="primary"
      startIcon={<GoogleIcon />}
      href={loginWithGoogleUrl}
    >
      Sign in with Google
    </Button>
  );
};

export default GoogleLoginButton;
