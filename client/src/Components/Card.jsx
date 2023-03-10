import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./Card.css"
function Card({ chosenFligth }) {
    const [results, setResults] = useState([]);
    const [selectedFligth, setSelectedFligth] = useState([])
    console.log(chosenFligth)
    useEffect(() => {
        async function getDataFromApi() {
            try {
                const { data } = await axios.get(
                    "https://6374b4b508104a9c5f869829.mockapi.io/Data/fligths"
                );
                console.log(data);

                setResults(data);
            } catch (error) {
                console.log(error);
            }
        }
        getDataFromApi();
    }, []);

    useEffect(() => {
        const fligth = results.filter((property) => property.id === chosenFligth);
        console.log(fligth)
        setSelectedFligth(fligth)
    }, [results, chosenFligth])

    const showFligth = () => {
        return selectedFligth?.map(fligth => {
            return <div className='section'>
                <div className='wrapper'>
                    <img src={fligth.fligthnum} alt={fligth.name} />
                    <div>
                        {fligth.name}
                    </div>
                    <div><p>{fligth.header}</p></div>
                    <div><p>{fligth.city}</p></div>
                    <div><p><span className="material-symbols-outlined">
star_rate
</span></p></div>
                    <div><p><span style={{ color: "red" }} className="material-symbols-outlined">
                        wifi
                    </span></p></div>
                    <div><p>{fligth.description}</p></div>
                    <button className="btn">get in touch</button>
                </div>
            </div>
        })
    }

    // function cardInfo() {
    //     return (
    //       <Card style={{ width: '18rem' }}>
    //         <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
    //         <Card.Body>
    //           <Card.Title>Card Title</Card.Title>
    //           <Card.Text>
    //             Some quick example text to build on the card title and make up the
    //             bulk of the card's content.
    //           </Card.Text>
    //         </Card.Body>
    //         <ListGroup className="list-group-flush">
    //           <ListGroup.Item>Cras justo odio</ListGroup.Item>
    //           <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
    //           <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
    //         </ListGroup>
    //         <Card.Body>
    //           <Card.Link href="#">Card Link</Card.Link>
    //           <Card.Link href="#">Another Link</Card.Link>
    //         </Card.Body>
    //       </Card>
    //     );
    //   }
    return (
        <div>
            {showFligth()}
        </div>
    )
}
export default Card;