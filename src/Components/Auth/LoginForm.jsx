import {Main,Section,Card,Text,GoogleButton,Form,Field,Label,Input,Actions,PrimaryButton,SecondaryButton} from "./LoginForm.style";

export const LoginForm = () => {
  return (
    <Main>
      <Section>
        <Card>
          <Text>
            Ви можете авторизуватися за допомогою акаунта Google
          </Text>

          <GoogleButton type="button">
            <span>Google</span>
          </GoogleButton>

          <Text>
            Або увійти за допомогою ел. пошти та паролю після реєстрації
          </Text>

          <Form>
            <Field>
              <Label htmlFor="email">Електронна пошта:</Label>
              <Input type="email" placeholder="your@email.com" />
            </Field>

            <Field>
              <Label htmlFor="password">Пароль:</Label>
              <Input type="password" placeholder="Пароль" />
            </Field>

            <Actions>
              <PrimaryButton type="submit">УВІЙТИ</PrimaryButton>
              <SecondaryButton type="button">
                РЕЄСТРАЦІЯ
              </SecondaryButton>
            </Actions>
          </Form>
        </Card>
      </Section>
    </Main>
  );
};
