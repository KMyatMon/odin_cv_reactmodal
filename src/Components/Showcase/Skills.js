import { Container, Row } from "react-grid-system";

export default function Skills({name}) {
        return(
        <Container className="">
            <Row>
           {name}
            </Row>
        </Container>
        )
    }