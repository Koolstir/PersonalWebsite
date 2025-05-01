export default function Heading() {
  return (
    <header>
      <div className="fixed top-3 w-full z-20">
        <nav className="flex max-w-4xl mx-auto items-center gap-2 py-2 bg-[#E3F1F8] rounded-full border-gray-600 border-2 mt-4">
          <div className="flex text-xl font-bold pl-8"> Kaelan Jantzen</div>
          <ul className="flex absolute left-1/2 transform -translate-x-1/2 ">
            <li className="mr-6">
              <a
                href="#About"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              > 
                About
              </a>
            </li>
            <li>
              <a
                href="https://www.shayvanpelt.com/"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Projects
              </a>
            </li>
            <li className="ml-6">
              <a
                href="https://www.youtube.com/"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Contact
              </a>
            </li>
          </ul>
          <button className="flex ml-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-8 rounded-full">
            Resume
          </button>
        </nav>
      </div>
    </header>
  );
}
