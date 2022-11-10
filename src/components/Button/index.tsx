import { withStyles } from "@material-ui/core/styles";
import ButtonMaterial from "@material-ui/core/Button";

import { ButtonProps } from "./@types/Button";

export function Button(props: ButtonProps) {

  const StyledButton = withStyles({
    root: {
      background: props.background,
      borderRadius: 4,
      border: 0,
      color: "white",
      height: 35,
      padding: "0 30px",
      cursor: "pointer",
      transition: "0.8s ease-in-out",
      "&:hover": {
        background:  props.backgroundHover,
        transition: "0.5s ease-in-out",
      },
    },
    label: {
      textTransform: "capitalize",
    },
  })(ButtonMaterial);

  return (
    <StyledButton onClick={props.onClick}>
      {props.title}
    </StyledButton>
  );

}
