import React from "react";
import { Link } from "react-router-dom"
const CarList = (props) => {
    const {data} = props
    return(
        <div className="container card-item">
        {
            !!data.length && (data.map(item => (
                    <div className="card">
                        <div className="card-img" placeholder="">
                            <img src={item.image}/>
                        </div>
                        <div className="title">
                            <h1 placeholder="Nama Mobil">{item.name}</h1>
                            <p className="title-price">Rp {item.price} / hari</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            <Link to={`/detailmobil/${item.id}`}>
                                <button className="btn btn-card">Pilih Mobil</button>
                            </Link>
                        </div>
                    </div>
                ))
            )
        }
        </div>
    )
}

export default CarList;