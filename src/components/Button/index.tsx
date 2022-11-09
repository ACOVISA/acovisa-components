import Button from '@material-ui/core/Button';

import { ButtonProps } from './@types/Button';

export function Buttons(props: ButtonProps) {
  return (
    <div >
        <Button
            variant={props.variant}
            color={props.color}
            onClick={props.onClick}
        >
            {props.title}
        </Button>
    </div>
  );
}