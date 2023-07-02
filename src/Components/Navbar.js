import Logo from "../Assets/Img/KnittoLogo.png";

export default function Navbar(){
    return(
            <nav className="bg-gray-300">
                <div className="flex items-center font-medium justify-center h-12">
                <div className="z-50 p-5 md:w-auto w-full flex items-center">
                    <img src={Logo} alt="logo" className="md:cursor-pointer h-10" />
                    <p className="ml-2 font-bold">Knitto Textile</p>
                </div>
                </div>
            </nav>
    )
}