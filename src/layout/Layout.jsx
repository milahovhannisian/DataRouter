import { Outlet, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        if (window.history.length > 2) {
            navigate(-1);
        } else {
            navigate("/");
        }
    };

    return (
        <>
            <Header />
            <main>
                <button
                    onClick={handleBack}
                    style={{
                        margin: "10px",
                        padding: "5px",
                        cursor: "pointer",
                    }}
                >
                    Back
                </button>
                <Outlet />
            </main>
            <Footer />
        </>
    );
};


export default Layout;

