import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Banner from "../../Components/Banner"
import Footer from "../../Components/Footer"
import NavBar from "../../Components/Navbar"
import './cars.css'
import { FormGroup, Form, Input, Label } from 'reactstrap';


const Cars = () => {
    const [data, setData] = useState([])
    const [name, setName] = useState("")
    const options = [
        { value:true, label: true },
        { value:false, label: false}
    ]

    useEffect(()=> {
        axios
        .get("https://bootcamp-rent-car.herokuapp.com/admin/car")
        // .then((res) => console.log(res))
        .then((res) => setData(res.data))
        .catch((err)=> console.log(err))
    },[])

    const handleChangeName =(event)=>{
        setName(event.target.value);
    }
    console.log("Name",name);

    // const handleSearch = () =>{
    //     const payload = {
    //         name : name
    //     }
    //     axios
    //         .post("https://bootcamp-rent-car.herokuapp.com/admin/car", payload)
    //         .then((res) => setData(res))
    //         .catch((err)=> console.log(err))
    // }

    const handleSearch = () => {
        const newArr = data.filter(data => (
            data.name == name
        ))
        console.log(newArr);
        setData(newArr)
    }
    
    return (
        <div>
            <NavBar/>
            <Banner showBtn={false}/>
            {/* <Form>
                <FormGroup>
                    <label>
                        Nama Mobil
                    </label>
                    <Input
                        id="exampleEmail"
                        name="email"
                        placeholder="with a placeholder"
                        type="email"
                    />
                </FormGroup>
            </Form> */}
            <div className="container box-cari">
                <div>
                    <p>Nama Mobil</p>
                    <input 
                    onChange={(event)=>handleChangeName(event)}
                    placeholder="Ketik nama/tipe mobil">

                    </input>
                </div>
                <div>
                    <p>Kategori</p>
                    <Input
                     bsSize="sm"
                    className="mb-3"
                    type="select"
                    >
                <option>
      Small Select
                </option>
                    </Input>
                </div>
                <div>
                    <p>Harga</p>
                    <Input
                         id="exampleSelect"
                        name="select"
                        type="select"
                        placeholder="with a placeholder"
                    >
                        <option>
                    1
                        </option>
                        <option>
                    2
                        </option>
                        <option>
                    3
                        </option>
                     </Input>
                </div>
                <div>
                    <p>Status</p>
                    <input id="exampleSelect"
                        name="select"
                        type="select"
                    >
                    </input>
                    <Input
                         id="exampleSelect"
                        name="select"
                        type="select"
                    >
                        <option>
                    True
                        </option>
                        <option>
                    False
                        </option>
                     </Input>
                </div>
                <div>
                    <button className="btn-sewa"
                    onClick={handleSearch}>Cari Mobil</button>
                </div>
            </div>
                {
                    !!data.length && (
                        data.map(item => (
                            <div>
                                <div>
                                    <img src={item.image}/>
                                </div>
                                <div>
                                    <h1>{item.name}</h1>
                                    <p>{item.price}</p>
                                    <Link to={`/detailmobil/${item.id}`}>
                                        <button className="btn-sewa">Pilih Mobil</button>
                                    </Link>
                                    
                                </div>
                            </div>
                        ))
                    )
                }
            <Footer/>
        </div>
    )
}

export default Cars