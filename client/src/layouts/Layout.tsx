import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <>
            <header className="bg-emerald-800">
                <div className="mx-auto max-w-6xl py-10 flex justify-between items-center">
                    <h1 className="text-4xl font-extrabold text-white">
                        Administrator to products
                    </h1>
                    <img alt="icon" src="/icon.png" className="w-20"/>
                </div>
            </header>

            <main className="mt-10 mx-auto max-w-6xl p-10 bg-emerald-50 rounded-4xl shadow-lg">
                <Outlet />
            </main>
        </>
    )
}
