export type joke = {
  email: string;
  joke: string;
};

export function Joke({ email, joke }: joke) {
  return (
    <article>
      <h3>{email}</h3>
      <p>{joke}</p>
    </article>
  );
}
