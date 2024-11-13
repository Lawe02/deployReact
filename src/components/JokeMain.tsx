import { useEffect, useState } from "react";
import { joke } from "./Joke";
import JokeCard from "./JokeCard";
import { fetchJokes } from "../api/api";
import { AddJokeForm } from "./AddJokeForm";

export function JokeMain() {
  const [jokes, setJokes] = useState<joke[]>([]);

  useEffect(() => {
    const listJokes = async () => {
      const jokes = await fetchJokes();
      setJokes(() => jokes);
    };
    listJokes();
  });
  return (
    <main>
      <JokeCard Jokes={jokes} />
      <AddJokeForm />
    </main>
  );
}
