import { SignedIn, SignedOut, SignInButton } from '@clerk/clerk-react'
import Header from './components/Header'
import "./style/styles.css"
import {JokeMain} from "./components/JokeMain.tsx";

function App() {
  return (
    <header>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <Header />
          <JokeMain />
      </SignedIn>
    </header>
  )
}

export default App
