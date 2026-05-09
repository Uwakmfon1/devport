import { Outlet }   from 'react-router-dom'
import Navbar from './Navbar'

export default function Layout() {
    return (
        <div className="min-h-screen text-gray-900">
            <Navbar />  
            <main className="max-w-4xl mx-auto px-4 py-8">
                <Outlet />
            </main>
        </div>
    )
}