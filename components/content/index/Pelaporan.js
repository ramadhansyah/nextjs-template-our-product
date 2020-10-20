import Design from "./Design";

const Pelaporan = () => {
    return (
        <>
            <div className="basic-2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="image-container">
                                <img className="img-fluid" src="/static/images/details-2-office-team-work.svg" alt="alternative" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="text-container">
                                <h2>Pelaporan Kampus Anda Ke Feeder PDDIKTI 100%  </h2>
                                <ul className="list-unstyled li-space-lg">
                                    <li className="media">
                                        <i className="fas fa-check"></i>
                                        <div className="media-body">Pelaporan feeder PDDIKTI tepat waktu</div>
                                    </li>
                                    <li className="media">
                                        <i className="fas fa-check"></i>
                                        <div className="media-body">Mengikutin Perubahan regulasi pelaporan Feeder PDDIKTI</div>
                                    </li>
                                    <li className="media">
                                        <i className="fas fa-check"></i>
                                        <div className="media-body">Monitoring Pelaporan Feeder PDDIKTI</div>
                                    </li>
                                </ul>
                                <a className="btn-solid-reg popup-with-move-anim" href="#details-lightbox-2">DETAIL FITUR SYNCRONT FEEDER</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="details-lightbox-2" className="lightbox-basic zoom-anim-dialog mfp-hide">
                <div className="container">
                    <div className="row">
                        <button title="Close (Esc)" type="button" className="mfp-close x-button">×</button>
                        <div className="col-lg-8">
                            <div className="image-container">
                                <img className="img-fluid" src="<?=base_url();?>web/images/details-lightbox-2.svg" alt="alternative"/>
                            </div> 
                        </div> 
                        <div className="col-lg-4">
                            <h3>Feeder PDDIKTI</h3>
                            <hr/>
                            <h5>Klik Campus Syncront Feeder PDDIKTI</h5>
                            <p>The emailing module basically will speed up your email marketing operations while offering more subscriber control.</p>
                            <p>Do you need to build lists for your email campaigns? It just got easier with Evolo.</p>
                            <ul className="list-unstyled li-space-lg">
                                <li className="media">
                                    <i className="fas fa-check"></i><div className="media-body">List building framework</div>
                                </li>
                                <li className="media">
                                    <i className="fas fa-check"></i><div className="media-body">Easy database browsing</div>
                                </li>
                                <li className="media">
                                    <i className="fas fa-check"></i><div className="media-body">User administration</div>
                                </li>
                                <li className="media">
                                    <i className="fas fa-check"></i><div className="media-body">Automate user signup</div>
                                </li>
                                <li className="media">
                                    <i className="fas fa-check"></i><div className="media-body">Quick formatting tools</div>
                                </li>
                                <li className="media">
                                    <i className="fas fa-check"></i><div className="media-body">Fast email checking</div>
                                </li>
                            </ul>
                            <a className="btn-solid-reg mfp-close page-scroll" href="#request">REQUEST</a> <a className="btn-outline-reg mfp-close as-button" href="#screenshots">BACK</a>
                        </div> 
                    </div> 
                </div> 
            </div>
        </>
    );
}
export default Pelaporan;