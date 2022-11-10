import { Button } from "./components/Button";
export function App() {
  const alerta = () => {
    alert("Cancelar")
  }
  return (
    <>
      <Button
        title={"Cancelar operação"}
        variant={"contained"}
        background={"#b91c1c"}
        backgroundHover={"#f87171"}
        onClick={alerta}
      />
    </>
  )
}
