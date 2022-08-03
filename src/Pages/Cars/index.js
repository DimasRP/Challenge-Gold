import axios from "axios"
import React from 'react'
import { useEffect, useState } from "react"
import Banner from "../../Components/Banner"
import Footer from "../../Components/Footer"
import NavBar from "../../Components/Navbar"
import CarList from "../../Components/CarList"
import './cars.css'
import Select from 'react-select'
import {Status, Harga, Kategori} from "./data"


const Cars = () => {
    const [data, setData] = useState([])
    const [name, setName] = useState("")
    // const [category, setCategory] = useState("")
    // const [status, setStatus] = useState("")
    const [fdata, setFdata] = useState([])
    const [notF, setNotF] = useState (false)

    
    useEffect(()=> {
        axios
        .get("https://bootcamp-rent-car.herokuapp.com/admin/car")
        // .then((res) => console.log(res))
        .then((res) => setData(res.data))
        .catch((err)=> console.log(err))
    },[])

    const handleChangeName =(event)=>{
        console.log(event);
        setName(event.target.value);
        if (!event.target.value.length){
            setFdata([])
            setNotF(false)
        }
    }
    // const handleSelectCategory =(event)=>{
    //     console.log(event);
    //     setCategory(event.value, event.label);
    // }
    // const handleSelectStatus =(event)=>{
    //     console.log(event);
    //     setStatus(event.value, event.label);
    // }
    
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
        const newArr = data.filter((event) => (
            event.name === name
        ))
        // const arrKategori = data.filter(data => (
        //     data.category == category
        // ))
        // const arrStatus = data.filter(data => (
        //     data.status == status
        // ))
        if (!newArr.length){
        // console.log(arrKategori);
        setNotF(true)
        }
        setFdata(newArr)
        
    }
    
    console.log("data",data)
    console.log("data fdata", fdata);
    return (
        <div>
            <NavBar/>
            <Banner showBtn={false}/>
            <div className=" box">
                <div className=" box-cari">
                    <div>
                        <h1>Pencarianmu</h1>
                    </div>
                    <div className="box-filter">
                        <div>
                            <p>Nama Mobil</p>
                            <input 
                            onChange={(event)=>handleChangeName(event)}
                            placeholder="Ketik nama/tipe mobil">
                            </input>
                        </div>
                    <div>
                        <p>Kategori</p>
                        <Select
                            defaultValue={{value:"Masukkan Kapasitas Mobil", label:"Masukkan Kapasitas Mobil"}}
                            options={Kategori}
                            // onChange={handleSelectCategory}
                        />
                    </div>
                    <div>
                        <p>Harga</p>
                        <Select
                            defaultValue={{value:"Masukan Harga Sewa per Hari", label:"Masukan Harga Sewa per Hari"}}
                            options={Harga}
                            // onChange={handleSelectCategory}
                        />
                    </div>
                    <div>
                        <p>Status</p>
                        <Select
                            defaultValue={{value:"Status", label:"Status"}}
                            options={Status}
                            // onChange={handleSelectStatus}
                        />
                    </div>
                    <div className=" btn-cari">
                        <button className="btn"
                        onClick={handleSearch}>Cari Mobil</button>
                    </div>
                    </div>
                </div>
            </div>
            {!!notF &&
            <div className="notfound">
                <h1>Data Tidak Ditemukan</h1>
            </div>
            }
            <CarList data = {!fdata.length ? data : fdata} />
            <Footer/>
        </div>
    )
}

export default Cars