import { FormWrapper } from "@/components/FormWrapper";
import { LoginForm } from "@/components/loginform/LoginForm";
import React from "react";

const SignIn = () => {
  return (
    <main>
      <FormWrapper title="Login">
        <LoginForm />
      </FormWrapper>
    </main>
  );
};

export default SignIn;
