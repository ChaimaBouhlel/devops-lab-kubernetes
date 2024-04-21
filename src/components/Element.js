import Card from "react-bootstrap/esm/Card"


function Element({element}) {
    return (

            <Card 
                bg="light"
                key="Light"
                text="dark"
                style={{ width: '15rem' }}
                className="mb-2"
            >
                <Card.Body>
                    <Card.Title>{element?.name} </Card.Title>
                    <Card.Text>
                    </Card.Text>
                </Card.Body>
            </Card>

    )
}
export default Element;