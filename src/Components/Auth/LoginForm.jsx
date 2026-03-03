import {Main,Section,Card,Text,GoogleButton,Form,Field,Label,Input,Actions,PrimaryButton,SecondaryButton, Inn, Branddd, BrandWrap} from "./LoginForm.style";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
   const navigate = useNavigate();

  const handleSubmit = (e) => {
    if (e)  e.preventDefault();
    navigate("/dashboard");
  }
    navigate("/dashboard");
  return (
    <Main>
     <BrandWrap>
  <Inn>InvestIQ</Inn>
  <Branddd>smart finance</Branddd>
</BrandWrap>
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

          <Form onSubmit={handleSubmit}>
            <Field>
              <Label htmlFor="email">Електронна пошта:</Label>
              <Input type="email" placeholder="your@email.com" />
            </Field>

            <Field>
              <Label htmlFor="password">Пароль:</Label>
              <Input type="password" placeholder="Пароль" />
            </Field>

            <Actions>
           <PrimaryButton type="button" onClick={handleSubmit}>
  УВІЙТИ
</PrimaryButton>

              <SecondaryButton type="button"  onClick={() => navigate("/register")}>
                РЕЄСТРАЦІЯ
              </SecondaryButton>
            </Actions>
          </Form>
        </Card>
      </Section>

      
    </Main>
  );
};
