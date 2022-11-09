import { ButtonTypeMap } from '../../../../node_modules/@material-ui/core/Button'

type Button = ButtonTypeMap['props']

export interface ButtonProps extends Button {
    title: string;
    onClick?: () => void,
}
