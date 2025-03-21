import Wicon from '../../assets/icons8-microsoft-project-250 (1).png'
// import Bicon from '../assets/icons8-group-of-projects-80.png'

const Navbar = () => {
  return (
    <nav className="bg-white border-black dark:bg-black">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-7">
          <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
              <img src={Wicon} className="h-8" alt="Flowbite Logo" />
              <span className="self-center text-2xl font-semibold px-10 whitespace-nowrap dark:text-white">ConstructionXpert</span>
          </a>
          <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
          </button>
        </div>
      </nav>
    )
}

export default Navbar