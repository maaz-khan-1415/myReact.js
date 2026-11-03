import { createRoot } from "react-dom/client";
import App from "./App.jsx";
// import "./index.css"

createRoot(document.getElementById("root")).render(<App />);

// Bro, this line imports the createRoot function from the react-dom/client package.

// Why do we use it?

// We use createRoot to create a place in the HTML where React will display our application.

// In simple words: It connects React with the HTML page.

// Understand it step by step:
// 1. document.getElementById("root") – Finds the HTML element whose ID is root.
// 2. createRoot() – Creates a React root inside that HTML element.
// 3. .render(<App />) – Displays your App component inside root.
