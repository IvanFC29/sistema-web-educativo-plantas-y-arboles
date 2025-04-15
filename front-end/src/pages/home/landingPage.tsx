import LoginUsr from "../usuario/LoginUsr";
import { Carrusel } from "./Carrusel";
export function LandingPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-lime-300">
            <section className="grid grid-cols-1 md:grid-cols-2 gap-4 m-4">
                <div className="m-6 md:m-12">
                    <Carrusel />
                </div>
                <div className="m-6 md:m-12">
                    <LoginUsr />
                </div>
            </section>
        </div>
    )
}