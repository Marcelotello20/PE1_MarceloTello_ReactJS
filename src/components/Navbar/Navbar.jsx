import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {


    return (
    <>

    <nav className="Navbar">

    <ul className="NavbarLista">
        <li>Inicio</li>
        <li>Productos</li>
        <li>Contacto</li>
    </ul>
    <CartWidget className="Carrito"/>
    </nav> 
    </>
    )
}

export default Navbar;