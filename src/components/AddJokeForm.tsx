import { useState } from "react";
import { useUser } from "@clerk/clerk-react";
import {postjokes} from "../api/api.ts";

export function AddJokeForm() {
  const [joke, setJoke] = useState("");
  const {user} = useUser();
  const email = user?.primaryEmailAddress?.emailAddress;

  const handleSubmit = async () => {
    try {
      postjokes(email, joke);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Add Joke</label>
      <input
        type="text"
        value={joke}
        onChange={(e) => setJoke(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}
