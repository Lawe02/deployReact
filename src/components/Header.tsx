import { UserButton, useUser } from "@clerk/clerk-react";

export default function Header() {
  const { user } = useUser();
  const userName = user?.username || user?.primaryEmailAddress?.emailAddress;

  return (
    <nav className="navbar-container">
      <h1>Joke</h1>
      <div className="user-info">
        <p>Hello, {userName}</p>
        <UserButton />
      </div>
    </nav>
  );
}
