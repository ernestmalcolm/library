import { useForm } from "@mantine/form";
import {
  TextInput,
  PasswordInput,
  Text,
  createStyles,
  Button,
} from "@mantine/core";
import Link from "next/link";

const useStyles = createStyles(() => ({
  form: {
    maxWidth: "500px",
    padding: "50px 50px",
  },
}));

function AuthenticationForm() {

  const { classes } = useStyles();

  const form = useForm({
    initialValues: {
      email: "",
      name: "",
      password: "",
      terms: true,
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
      password: (val) =>
        val.length <= 6
          ? "Password should include at least 6 characters"
          : null,
    },
  });

  return (
    <div className={classes.form}>
      <Text size="lg" weight={500}>
        Welcome to Ellipsis Library,
      </Text>

      <form onSubmit={form.onSubmit(() => {})}>
        <TextInput
          required
          label="Email"
          placeholder="hello@library.com"
          value={form.values.email}
          onChange={(event) =>
            form.setFieldValue("email", event.currentTarget.value)
          }
          error={form.errors.email && "Invalid email"}
        />

        <PasswordInput
          required
          label="Password"
          placeholder="Your password"
          value={form.values.password}
          onChange={(event) =>
            form.setFieldValue("password", event.currentTarget.value)
          }
          error={
            form.errors.password &&
            "Password should include at least 6 characters"
          }
        />

        <Button type="submit">Log in</Button>
      </form>
      <Link href="/register">Dont have an account? Register here</Link>
    </div>
  );
}

export default AuthenticationForm;
