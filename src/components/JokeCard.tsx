import { Joke, joke } from "./Joke";

type jokeCardInPut = {
  Jokes: joke[];
};

export default function JokeCard({ Jokes }: jokeCardInPut) {
  const jokes = Jokes.map((joke) => {
    return <Joke email={joke.email} joke={joke.joke} />;
  });

  return <>{jokes}</>;
}
