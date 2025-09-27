export default function Footer() {
    const currentYear = new Date().getFullYear();

    //Agregar Peli
    return (
        <footer className="footer">
            <div className="footerContainer">
                <div className="footerSimpleContent">
                    <p className="footerCopyright">© {currentYear} Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}