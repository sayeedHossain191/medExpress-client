import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../provider/AuthProvider"
import { Link } from "react-router-dom"
import { FaTruckMedical } from "react-icons/fa6";

const Navbar = () => {

    const [theme, setTheme] = useState('light')

    //Theme update state on toggle
    const handleToggle = e => {
        if (e.target.checked) {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }


    // set theme state in localStorage on mount & also update localStorage on state change
    useEffect(() => {
        localStorage.setItem('theme', theme)
        const localTheme = localStorage.getItem('theme')

        // add custom data-theme attribute
        document.querySelector('html').setAttribute('data-theme', localTheme)
    }, [theme])

    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    }


    return (
        <div>

            <div className="navbar bg-base-100 container px-4 mx-auto font-poppins">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[50] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='/services'>Services</Link>
                            </li>
                            {
                                user && <li>
                                    <a>Dashboard</a>
                                    <ul className="p-2">
                                        <li>
                                            <Link to='/addService'>Add Service</Link>
                                        </li>
                                        <li>
                                            <Link to='/manageService'>Manage Service</Link>
                                        </li>
                                        <li>
                                            <Link to='/bookedService'>Booked-Services</Link>
                                        </li>
                                        <li>
                                            <Link to='/toDoService'>Service-To-Do</Link>
                                        </li>
                                    </ul>
                                </li>
                            }

                        </ul>
                    </div>
                    <div className='flex-1'>
                        <Link to='/' className='flex gap-2 items-center'>
                            <img className='w-auto h-7' src='' alt='' />
                            <FaTruckMedical className='w-auto h-7 text-[#0FE3AF]' />
                            <span className='font-bold text-lg text-[#0152A8]'>MedExpress</span>
                        </Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <label onChange={handleToggle} className="flex cursor-pointer gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                        <input type="checkbox" value="synthwave" className="toggle theme-controller" />
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                    </label>
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/services'>Services</Link>
                        </li>
                        {
                            user && <li className="z-50">
                                <details>
                                    <summary>Dashboard</summary>
                                    <ul className="p-2 w-44">
                                        <li>
                                            <Link to='/addService'>Add Service</Link>
                                        </li>
                                        <li>
                                            <Link to='/manageService'>Manage Service</Link>
                                        </li>
                                        <li>
                                            <Link to='/bookedService'>Booked-Services</Link>
                                        </li>
                                        <li>
                                            <Link to='/toDoService'>Service-To-Do</Link>
                                        </li>
                                    </ul>
                                </details>
                            </li>
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user?.uid ?
                            <>
                                <span className=""><img src={user?.photoURL} title={user?.displayName} className=" ml-5 h-10 rounded-full" alt="" /></span>
                                <button onClick={handleLogOut} className="btn btn-ghost normal-case text-lg">Log Out</button>
                            </>
                            :
                            <>
                                <Link to='/login' className="btn btn-ghost normal-case text-lg">Login</Link>
                            </>
                    }

                </div>
            </div>
        </div>


    )
}

export default Navbar
