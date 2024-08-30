
import { toast } from 'react-toastify';
export default function Home() {

    function alertMe() {
        alert("click!");
    }

    function consoleOut() {
        console.log("hello world!")
    }

    function notes() {
        toast.success("Notes Clicked!");
    }
    return (
        <div>
            <h1>Hello Admin!</h1>
            <div id="dashboard">
                <button className="px-6 py-2 bg-indigo-500 text-white font-semibold rounded-full hover:bg-indigo-600" onClick={alertMe}> Admin</button>
                <button className="px-6 py-2 bg-indigo-500 text-white font-semibold rounded-full hover:bg-indigo-600" onClick={consoleOut}> Tasks</button>
                <button className="px-6 py-2 bg-indigo-500 text-white font-semibold rounded-full hover:bg-indigo-600" onClick={notes}> Notes</button>
                
            </div>
            <div className="mt-10" id="exampleButtons">
            <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md">
                    Basic Button
                </button>
              
                <button className="px-4 py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300">
                    Hover and Focus Button
                </button>
                <button className="px-4 py-2 border border-blue-500 text-blue-500 font-semibold rounded-md hover:bg-blue-50">
                    Outline Button
                </button>
                <button className="px-4 py-2 bg-gray-300 text-gray-500 font-semibold rounded-md cursor-not-allowed" disabled>
                    Disabled Button
                </button>

                <button className="flex items-center px-4 py-2 bg-red-500 text-white font-semibold rounded-md">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.5 5.5 1.42-1.42L8.34 14H1v-2h7.34l-2.42-5.08L4.5 2H6l3 6.76L12 2h1.5l-2.5 5.92L16 10h-7.34l2.42 5.08L15.5 19.5 14.08 18.1z"></path></svg>
                    Icon Button
                </button>

                <button className="px-6 py-2 bg-indigo-500 text-white font-semibold rounded-full hover:bg-indigo-600">
                    Rounded Full Button
                </button>
            </div>
        </div>
    );
}