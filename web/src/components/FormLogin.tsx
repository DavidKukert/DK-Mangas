import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

interface FormLoginProps {
  buttonText?: string;
  formSubmit: (data: FormLoginSchema) => void;
}

const loginSchema = z.object({
  username: z
    .string({ required_error: "Username is required!" })
    .trim()
    .min(1, { message: "Username is required!" }),
  password: z
    .string({ required_error: "Password is required!" })
    .trim()
    .min(1, { message: "Password is required!" }),
});

type FormLoginSchema = z.infer<typeof loginSchema>;

const FormLogin: React.FC<FormLoginProps> = ({
  buttonText = "Login",
  formSubmit,
  ...props
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormLoginSchema>({
    resolver: zodResolver(loginSchema),
  });
  const onSubmit = handleSubmit((data) => formSubmit(data));

  return (
    <>
      <form onSubmit={onSubmit} className="form-login">
        <input
          type="text"
          {...register("username")}
          placeholder="Digite o seu usuário..."
        />
        <p className="text-end text-xs text-red-700 font-medium mr-4">
          {errors.username?.message}
        </p>
        <input
          type="password"
          {...register("password")}
          placeholder="Digite a sua senha..."
        />
        <p className="text-end text-xs text-red-700 font-medium mr-4">
          {errors.password?.message}
        </p>
        <button type="submit">{buttonText}</button>
      </form>
    </>
  );
};

export { FormLogin };
export type { FormLoginSchema };
