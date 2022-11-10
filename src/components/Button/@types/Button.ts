import { ButtonTypeMap } from '../../../../node_modules/@material-ui/core/Button'

type Button = ButtonTypeMap['props']
export interface ButtonProps extends Button {
    title: string;
    background: "#0071BB"|"#003A70"|"#C8D8EB"|"#b91c1c",
    backgroundHover: "#0071BB"|"#003A70"|"#C8D8EB"|"#f87171",
    onClick?: () => void,
}
