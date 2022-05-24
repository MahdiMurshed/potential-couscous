import { TextInput, Button, Group, Center, PasswordInput, Card } from '@mantine/core';
import { useForm } from '@mantine/form';

export default function Demo() {
  const form = useForm({
    initialValues: {
      email: '',
      password: '',
      'confirm password': '',
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: (value) => (value.length >= 8 ? null : 'please enter at least 8 digit'),
      'confirm password': (value, values) =>
        value !== values.password ? 'Passwords did not match' : null,
    },
  });

  return (
    <Center style={{ width: '100%', height: '100vh' }}>
      <Card
        shadow="lg"
        p="lg"
        mx="auto"
        sx={{
          width: '30%',
          height: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <form
          onSubmit={form.onSubmit((values) => console.log(values))}
          style={{
            width: '100%',
          }}
        >
          <TextInput
            required
            label="Email"
            placeholder="your@email.com"
            {...form.getInputProps('email')}
          />
          <PasswordInput
            required
            label="Password"
            placeholder="8 digit password"
            {...form.getInputProps('password')}
          />
          <PasswordInput
            required
            label="Confirm password"
            placeholder="Confirm password"
            {...form.getInputProps('confirm password')}
          />

          <Button
            type="submit"
            mt="lg"
            sx={{
              width: '100%',
            }}
          >
            Submit
          </Button>
        </form>
      </Card>
    </Center>
  );
}
