import Link from 'next/link';
const Sidebar = () => {
    return (
        <>

            <div className="card my-4">
                <h5 className="card-header">Search</h5>
                <div className="card-body">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search for..." />
                        <span className="input-group-append">
                            <button className="btn btn-secondary" type="button">Go!</button>
                        </span>
                    </div>
                </div>
            </div>


            <div className="card my-4">
                <h5 className="card-header">Categories</h5>
                <div className="card-body">
                    <div className="row">
                        <div className="col-lg-6">
                            <ul className="list-unstyled mb-0">
                                <li>
                                    <Link href="/blog/halaman-1">
                                        <a >Halaman 1</a>
                                    </Link>
                                </li>
                                <li>
                                <Link href="/blog/halaman-2">
                                        <a >Halaman 2</a>
                                    </Link>
                                </li>
                                <li>
                                <Link href="/blog/halaman-1">
                                        <a >Halaman 3</a>
                                    </Link>
                                </li>
                                <li>
                                <Link href="/blog/halaman-2">
                                        <a >Halaman 4</a>
                                    </Link>
                                </li>
                                <li>
                                <Link href="/blog/halaman-1">
                                        <a >Halaman 5</a>
                                    </Link>
                                </li>
                                <li>
                                <Link href="/blog/halaman-2">
                                        <a >Halaman 6</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-6">
                            <ul className="list-unstyled mb-0">
                                <li>
                                    <a href="#">JavaScript</a>
                                </li>
                                <li>
                                    <a href="#">CSS</a>
                                </li>
                                <li>
                                    <a href="#">Tutorials</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card my-4">
                <h5 className="card-header">Side Widget</h5>
                <div className="card-body">
                    You can put anything you want inside of these side widgets. They are easy to use, and feature the new Bootstrap 4 card containers!
                    </div>
            </div>
        </>
    );
}

export default Sidebar;