import { ReactNode } from "react";
import { Container, LeftSide, RightSide } from "./styles";

interface AppTemplateProps{
    children: ReactNode;
}

const AppTemplate = ({children}:AppTemplateProps) => (
    <Container>
        <LeftSide>

        </LeftSide>
        <RightSide>
            {children}
        </RightSide>
    </Container>

)

export default AppTemplate;