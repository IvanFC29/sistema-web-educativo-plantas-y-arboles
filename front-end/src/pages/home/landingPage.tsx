import { Button } from "flowbite-react";
import { useNavigate } from "react-router-dom";

export function LandingPage() {
    const navegador = useNavigate();

    const ingresar = () => {
        console.log('Se presiono el boton');
        navegador('/inicio');
    };

    return (
        <section className="self-center p-20">
            Bienvenido a arboledu 🚀
            <Button className="bg-green-500 hover:bg-green-600 p-2" onClick={ingresar}>Entrar</Button>
        </section>
    )
}