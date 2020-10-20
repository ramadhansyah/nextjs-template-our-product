const Request = () => {
    return (
        <>
            <div id="request" className="form-1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="text-container text-request">
                                <h2>Formulir Akun Demo </h2>
                                <ul className="list-unstyled li-space-lg">
                                    <li className="media">
                                        <i className="fas fa-check"></i>
                                        <div className="media-body"><strong className="blue">Isi data Yang Valid</strong> Data Request akan kami tindak lanjuti</div>
                                    </li>
                                    <li className="media">
                                        <i className="fas fa-check"></i>
                                        <div className="media-body"><strong className="blue">No.Telpon/Email</strong> Telpon/Email yang aktif</div>
                                    </li>
                                    <li className="media">
                                        <i className="fas fa-check"></i>
                                        <div className="media-body"><strong className="blue">Pilih PT anda</strong> Jika PT anda tidak terdaftar, Hubungi ke cs@klikdata.co.id, Hp 085294617540</div>
                                    </li>
                                    <li className="media">
                                        <i className="fas fa-check"></i>
                                        <div className="media-body"><strong className="blue"> </strong> Team Kami akan  segera Menghubungi Anda untuk memberi akses demo klik campus</div>
                                    </li>
                                </ul>
                                <img src="/static/images/details-1-office-worker.svg" />
                            </div>
                        </div>
                        <div className="col-lg-6">


                            <div className="form-container">


                                <div className="form-message">
                                    <div className="form-group">
                                        <div id="rmsgSubmit" className="h3 text-center hidden"></div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control-input" id="rname" name="rname" required />
                                    <label className="label-control" >Nama Lengkap</label>
                                    <div className="help-block with-errors"></div>
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control-input" id="remail" name="remail" required />
                                    <label className="label-control" >Email</label>
                                    <div className="help-block with-errors"></div>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control-input" id="rphone" name="rphone" required />
                                    <label className="label-control" >Telpon/HP</label>
                                    <div className="help-block with-errors"></div>
                                </div>
                                <div className="form-group">
                                    <select className="form-control-select select2" id="pt" name="pt" required style={{height: "100px"}}>
                                        <option className="select-option">Pilih Nama Perguruan Tinggi Anda</option>

                                    </select>
                                    <div className="help-block with-errors"></div>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control-input" id="rjabatan" name="rjabatan" required />
                                    <label className="label-control" >Jabatan anda di perguruan tinggi</label>
                                    <div className="help-block with-errors"></div>
                                </div>
                                <div className="form-group">
                                    <select className="form-control-select" id="informasi" name="informasi" required>
                                        <option className="select-option" >Dari Mana Anda Tau Informasi Klik Campus</option>
                                        <option className="select-option" value="Teman/Kerabat/Orang Lain">Teman/Kerabat/Orang Lain</option>
                                        <option className="select-option" value="Website Klik Data">Website Klik Data</option>
                                        <option className="select-option" value="Facebook">Facebook</option>
                                        <option className="select-option" value="Whatsapp">Whatsapp</option>
                                        <option className="select-option" value="Youtube">Youtube</option>
                                        <option className="select-option" value="Lainnya">Lainnya</option>
                                    </select>
                                    <div className="help-block with-errors"></div>
                                </div>
                                <div className="form-group checkbox">
                                    <input type="checkbox" id="pernyataan" value="1" name="pernyataan" required /> Saya menyatakan data yang saya masukkan benar dan saya setuju dengan Kebijakan Privasi, Syarat & Ketentuan yang dinyatakan PT.Klikdata Indonesia
                                        <div className="help-block with-errors"></div>
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="form-control-submit-button">REQUEST</button>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Request;