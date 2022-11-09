import { Card } from "./styled";
import { Props } from "./@types/Container";

export function Container(props: Props){
    return(
        <Card>
            {props.children}
        </Card>
    )
}