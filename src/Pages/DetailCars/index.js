import { useEffect, useState} from "react"
import Footer from "../../Components/Footer"
import NavBar from "../../Components/Navbar"
import axios from "axios"
import { useParams } from "react-router-dom"
import { Card, CardBody, CardTitle,CardSubtitle, CardText, Button } from 'reactstrap';

const DetailCars = () => {
    const[car, setCar] = useState({})

    const param = useParams()
    const id = param.id

    useEffect(() => {
        axios
        .get(`https://bootcamp-rent-car.herokuapp.com/admin/car/${id}`)
        .then((res) => setCar(res.data))
        .catch((err) => console.log(err))
    },[])

    // const panjang = Object.keys().length
    // console.log(panjang);
    return (
        <div>
            <NavBar/>
            {!!Object.keys(car).length ? (
                // <div>
                //     <img src={car.image}/>
                //     <h1>{car.name}</h1>
                //     <p>{car.price}</p>
                // </div>
                <Card
  style={{
    width: '18rem'
  }}
>
  <img
    alt="Card image"
    src="https://picsum.photos/300/200"
  />
  <CardBody>
    <CardTitle tag="h5">
      Card title
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      Card subtitle
    </CardSubtitle>
    <CardText>
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </CardText>
    <Button>
      Button
    </Button>
  </CardBody>
</Card>
            ):<p>loading</p>
            }   
            <Footer/>
        </div>
    )
}

export default DetailCars