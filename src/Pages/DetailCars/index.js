import { useEffect, useState} from "react"
import Footer from "../../Components/Footer"
import NavBar from "../../Components/Navbar"
import axios from "axios"
import { useParams } from "react-router-dom"
import './Detail.css'
import fiUsers from "../../Assets/fi_users.png"
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from 'reactstrap';
import Select from 'react-select'

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

    const [open, setOpen] = useState('');
    const toggle = (id) => {
        open === id ? setOpen() : setOpen(id);
    };

    return (
        <div>
            <NavBar/>
            <div className="container">
              {!!Object.keys(car).length ? (
                  <div className="detail-car">
                      <div className="detail-paket">
                        <p>Tentang Paket</p>
                        <p>Include</p>
                        <ul>
                          <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                          <li>Sudah termasuk bensin selama 12 jam</li>
                          <li>Sudah termasuk Tiket Wisata</li>
                          <li>Sudah termasuk pajak</li>
                        </ul>
                        <p>Exclude</p>
                        <ul>
                          <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                          <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                          <li>Tidak termasuk akomodasi penginapan</li>
                        </ul>
                        <Accordion flush open={open} toggle={toggle}  className='accor-paket'>
                          <AccordionItem>
                            <AccordionHeader targetId="1">
                              <p>Refund, Reschedule, Overtime</p>
                            </AccordionHeader>
                            <AccordionBody accordionId="1">
                              <ul>
                                <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                <li>Tidak termasuk akomodasi penginapan</li>
                                <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                <li>Tidak termasuk akomodasi penginapan</li>
                                <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                <li>Tidak termasuk akomodasi penginapan</li>
                              </ul>
                            </AccordionBody>
                          </AccordionItem>
                        </Accordion>
                      </div>
                      <div className="box-car">
                        <div className="img-detail">
                          <img src={car.image}/>
                        </div>
                        <div className="user">
                          <p>{car.name}</p>
                          <p className="title-category"><img src={fiUsers}/> {car.category}</p>
                        </div>
                        <div className="title-total">
                          <p>Total</p>
                          <p>Rp {car.price}</p>
                        </div>
                      </div>
                  </div>
                  
                ):<p>loading</p>
              }   
            </div>
            
            <Footer/>
        </div>
    )
}

export default DetailCars