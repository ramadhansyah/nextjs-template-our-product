const Service = () => {
    return (
        <>
            <div id="services" className="cards-1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>Services</h2>
                            <p className="p-heading p-large">Kami fokus pada pengembangan  Integrated Academic System (Sistem Informasi Akademik Campus Terintegrasi), memberi solusi-solusi terbaik yang berkaitan dengan kampus </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">

                            <div className="card">
                                <img className="card-image" src="/static/images/services-icon-3.svg" alt="alternative" />
                                <div className="card-body">
                                    <h4 className="card-title">Mempersiapkan </h4>
                                    <p>Kami akan membantu memindahkan semua data transaksi kampus  dari feeder PDDIKTI ke aplikasi klik-campus, <br />sebagai data awal kampus. (mahasiswa,nilai,akm,kurikulum,dosen,dll)</p>
                                </div>
                            </div>

                            <div className="card">
                                <img className="card-image" src="/static/images/services-icon-1.svg" alt="alternative" />
                                <div className="card-body">
                                    <h4 className="card-title">Training/Pelatihan</h4>
                                    <p>Our team of enthusiastic marketers will analyse and evaluate how your company stacks against the closest competitors</p>
                                </div>
                            </div>
                            <div className="card">
                                <img className="card-image" src="/static/images/services-icon-2.svg" alt="alternative" />
                                <div className="card-body">
                                    <h4 className="card-title">Konsultasi</h4>
                                    <p>Once the market analysis process is completed our staff will search for opportunities that are in reach</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Service;