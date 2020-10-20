import Header from './path/Header';
const LandingPage = ({children}) =>{
    return (
        <>
            <Header />
            <div className="content-wrapper">{children}</div>
        </>
    );
}

export default LandingPage;