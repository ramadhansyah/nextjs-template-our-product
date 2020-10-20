const Contact = () =>{
    return(
        <>
            <div id="contact" className="form-2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>Contact Information</h2>
                            <ul className="list-unstyled li-space-lg">
                                <li className="address">Don't hesitate to give us a call or send us a contact form message</li>
                                <li><i className="fas fa-map-marker-alt"></i>Jl. Mr. Teuku Moh. Hasan, Blang Cut, Lueng Bata, Kota Banda Aceh, Aceh 23127, Indonesia</li>
                                <li><i className="fas fa-phone"></i><a className="turquoise" href="tel:003024630820">+6285294617540</a></li>
                                <li><i className="fas fa-envelope"></i><a className="turquoise" href="mailto:cs@klikdata.co.id">cs@klikdata.co.id</a></li>
                            </ul>
                        </div> 
                    </div> 
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="map-responsive">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.150012147528!2d95.3278605!3d5.544763600000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3040375d968cf7f3%3A0xd215c934435f9ee4!2sklik+data+indonesia!5e0!3m2!1sid!2sid!4v1538752268227" allowfullscreen></iframe>
                            </div>
                        </div> 
                    
                    </div> 
                </div> 
            </div>
        </>
    );
}

export default Contact;