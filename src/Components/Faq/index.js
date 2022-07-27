import React, { useState } from 'react';
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from 'reactstrap';
import './faq.css'
const FAQ = () => {
    
    const [open, setOpen] = useState('');
    const toggle = (id) => {
        open === id ? setOpen() : setOpen(id);
    };

    return (

        <div className="container container-faq">
            <div className='title'>
                <h1>Frequently Asked Question</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>

            <div className='accordion'>
                <Accordion flush open={open} toggle={toggle}>
                     <AccordionItem className='box-accordion'>
                        <AccordionHeader targetId="1">
                            <p>Apa saja syarat yang dibutuhkan?</p>
                        </AccordionHeader>
                        <AccordionBody accordionId="1">
                            <strong>Apa saja syarat yang dibutuhkan?</strong>
                                You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </AccordionBody>
                        <AccordionHeader targetId="2">
                            <p>Berapa hari minimal sewa mobil lepas kunci?</p>
                        </AccordionHeader>
                        <AccordionBody accordionId="2">
                            <strong>Berapa hari minimal sewa mobil lepas kunci?</strong>
                                You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </AccordionBody>
                        <AccordionHeader targetId="3">
                            <p>Berapa hari sebelumnya sabaiknya booking sewa mobil?</p>
                        </AccordionHeader>
                        <AccordionBody accordionId="3">
                            <strong>Berapa hari sebelumnya sabaiknya booking sewa mobil?</strong>
                                You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </AccordionBody>
                        <AccordionHeader targetId="4">
                                <p>Apakah Ada biaya antar-jemput?</p>
                        </AccordionHeader>
                        <AccordionBody accordionId="4">
                            <strong>Berapa hari sebelumnya sabaiknya booking sewa mobil?</strong>
                                You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </AccordionBody>
                        <AccordionHeader targetId="5">
                            <p>Bagaimana jika terjadi kecelakaan</p>
                        </AccordionHeader>
                        <AccordionBody accordionId="5">
                            <strong>Berapa hari sebelumnya sabaiknya booking sewa mobil?</strong>
                            You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </AccordionBody>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    )
}

export default FAQ