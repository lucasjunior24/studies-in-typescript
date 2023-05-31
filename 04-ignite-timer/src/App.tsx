import { ThemeProvider } from "styled-components";
import { Button } from "./components/Button";
import { deafaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={deafaultTheme}>
      <Button variant="primary" />
      <Button variant="secondary" />
      <Button variant="danger" />
      <Button />
    </ ThemeProvider>
    )
}