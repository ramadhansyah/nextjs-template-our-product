import Breadcrumbs from './path/Breadcrumbs';
import Sidebar from './path/Sidebar';
const Blog = ({children}) =>{
    return (
        <>
            <header id="header" className="ex-header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1>Halaman / Blog</h1>
                        </div> 
                    </div> 
                </div> 
            </header> 

            <Breadcrumbs/>
            <div className="ex-basic-2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            {children}
                        </div>
                        <div className="col-md-4">
                            <Sidebar/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Blog;