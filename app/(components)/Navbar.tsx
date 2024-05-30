
export default function Navbar(){
    return(
        <header className="flex items-center space-content-between">
            <div className="flex items-center">
                <a href="/"><h1>[JDTEK logo]</h1></a>
                <nav>
                    <ul className="flex">
                        <li><a href="/">Home</a></li>
                        <li><a href="/calendar">Calendar</a></li>
                        <li><a href="/shop">Webshop</a></li>
                        <li><a href="/about">About</a></li>
                    </ul>
                </nav>
            </div>
            <div className="flex items-center">
                <button>[Acount icon]</button>
                <button>[Cart icon]</button>
            </div>
        </header>
    )
}