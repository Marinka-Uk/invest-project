export const LoginForm = () => {
  return (
    <main>
      <section>
        <p>Ви можете авторизуватися за допомогою акаунта Google</p>

        <button type="button">
          <span>Google</span>
        </button>

        <p>Або увійти за допомогою ел. пошти та паролю після реєстрації</p>

        <form>
          <div>
            <label htmlFor="email">Електронна пошта:</label>
            <input  type="email" placeholder="your@email.com" />
          </div>

          <div>
            <label htmlFor="password">Пароль:</label>
            <input  type="password" placeholder="Пароль" />
          </div>

          <div>
            <button type="submit">УВІЙТИ</button>
            <button type="button">РЕЄСТРАЦІЯ</button>
          </div>
        </form>
      </section>
    </main>
  );
};
