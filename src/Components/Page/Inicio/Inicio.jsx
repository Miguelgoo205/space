import React from 'react'
import { Header } from '../../Layouts/Header/Header'
import { Li } from '../../UI/Li/Li'
import { Card } from '../../Layouts/Card/Card'



export const Inicio = () => {
    return (
    <>
    <Header/>
    <hr></hr>
    <main>
        <div className='cont-info'>
            <section>
                <img src="https://res.cloudinary.com/miguelgo205/image/upload/v1678334925/SpaceParking/ISOMETRIC_CAR_PARKING_ebfpvy.jpg" alt="" />  
            </section>
            <aside>
                <h2>Welcome To <br /> <span>Space</span> Parking</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum facere iusto expedita nesciunt molestiae harum dolorum quod eaque esse tempore doloremque iste, quaerat neque? Repellendus tempora amet molestiae laboriosam officia?</p>
            </aside>
        </div>
            <h2 className='service' >About Our Services</h2>

        <div className='services1'>

            <div className='card'>
                <Card content="SpaceUser" styleImg="service-img" imgUrl="https://res.cloudinary.com/miguelgo205/image/upload/v1678346056/SpaceParking/concepto-de-servicio-uso-compartido-autom%C3%B3viles-hombre-en-l%C3%ADnea-elige-auto-para-compartir-carros-alquiler-carpool-viajes-ciudad-165740150_crpvmw.jpg" 
                />
                <Li content="Busca Parqueaderos"/>
                <Li content="Reserva un Espacio"/>
                <Li content="Ve detalles del parqueadero"/>
            </div>
                

            <div className='card'>
                <Card content="AdminParking" styleImg="service-img" imgUrl="https://res.cloudinary.com/miguelgo205/image/upload/v1678334537/SpaceParking/parking-icon-flat-style-isolated-on-white-background-free-vector_wo8zkr.jpg"
                />
                <Li content="Gestiona tu parqueadero"/>
                <Li content="Promociona tu Parqueadero"/>
                <Li content="Recibe resevas en tu Parqueadero"/>
            </div>


        </div>
    </main>
    </>
    )
}
