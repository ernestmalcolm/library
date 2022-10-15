import { useToggle, upperFirst } from '@mantine/hooks';
import { useForm } from '@mantine/form';
import {
    Text,
  TextInput,
  PasswordInput,
  createStyles,
  Button,
} from '@mantine/core';
import Link from "next/link";

const useStyles = createStyles(() => ({
    form: {
      maxWidth: "500px",
      padding: "50px 50px",
    },
  }));

function register(){

    const { classes } = useStyles();

    const form = useForm({
        initialValues: {
          email: '',
          name: '',
          password: '',
        },
    
        validate: {
          email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
          password: (val) => (val.length <= 6 ? 'Password should include at least 6 characters' : null),
        },
      });

    return(<div className={classes.form}>
    <form>
        <Text size="lg" weight={500}>
        Welcome to Ellipsis Library, register below
      </Text>
        <TextInput
            required
            label="Email"
            placeholder="hello@mantine.dev"
            value={form.values.email}
            onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
            error={form.errors.email && 'Invalid email'}
          />

          <PasswordInput
            required
            label="Password"
            placeholder="Your password"
            value={form.values.password}
            onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
            error={form.errors.password && 'Password should include at least 6 characters'}
          />
          <Button type="submit">Register</Button>
      
          </form>
          <Link href="/">Have an account already? Log in here</Link>
          </div>
    );
}

export default register;