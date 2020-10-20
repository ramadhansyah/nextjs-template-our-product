const Design = () => {
    return (
        <>
            <div className="basic-1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="text-container">
                                <h2>Desain & Rencanakan Langkah Pertumbuhan Kampus Anda</h2>
                                <p>Gunakan Klik Campus  untuk merancang dan merencanakan strategi pertumbuhan Kampus Anda. Kami sangat ingin memberi tahu Anda tentang peluang terbaik yang harus Anda perhatikan</p>
                                <a className="btn-solid-reg popup-with-move-anim" href="#details-lightbox-1">LIGHTBOX</a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="image-container">
                                <img className="img-fluid" src="/static/images/details-1-office-worker.svg" alt="alternative" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="details-lightbox-1" className="lightbox-basic zoom-anim-dialog mfp-hide">
                <div className="container">
                    <div className="row">
                        <button title="Close (Esc)" type="button" className="mfp-close x-button">×</button>
                        <div className="col-lg-8">
                            <div className="image-container">
                                <img className="img-fluid" src="<?=base_url();?>web/images/details-lightbox-1.svg" alt="alternative" />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <h3>Design And Plan</h3>
                            <hr />
                            <h5>Core feature</h5>
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

export default Design;