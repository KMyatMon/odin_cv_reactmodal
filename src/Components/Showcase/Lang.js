import { Container, Row } from "react-grid-system";

export default function Lang({name}) {
        return(
        <Container className="">
            <Row>
           {name}
            </Row>
        </Container>
        )
    }