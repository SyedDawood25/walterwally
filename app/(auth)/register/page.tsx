import { FormWrapper } from "@/components/FormWrapper";
import { RegisterForm } from "@/components/registerform/RegisterForm";
import React from "react";

const SignUp = () => {
  return (
    <main>
      <FormWrapper title="Register">
        <RegisterForm />
      </FormWrapper>
    </main>
  );
};

export default SignUp;
