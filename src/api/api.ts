import { joke } from "../components/Joke";
const path = import.meta.env.BACKEND_PATH;

export const fetchJokes = async (): Promise<joke[]> => {
    const response = await fetch(`${path}/api/jokes`);
    return response.json();
}

export const postjokes = async (email: string | undefined, joke: string): Promise<joke> => {
    const response = await fetch(`${path}/api/jokes`, {
        method: "POST",
        headers: {
            "content-type": "application/JSON",
        },
        body: JSON.stringify({ joke, email }),
    });
    return response.json();
}
