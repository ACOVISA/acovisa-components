import ButtonMaterial from '@material-ui/core/Button';

import { ButtonProps } from './@types/Button';

export function Button(props: ButtonProps) {
  return (
    <div >
        <ButtonMaterial
            variant={props.variant}
            color={props.color}
            onClick={props.onClick}
        >
            {props.title}
        </ButtonMaterial>
    </div>
  );
}