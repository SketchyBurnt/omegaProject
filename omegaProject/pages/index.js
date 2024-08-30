export default function Home() {
    
    function alertMe() {
        alert("click!");
    }

    function consoleOut(){
        console.log("hello world!")
    }
    
    return (
        <div>
            <h1>Hello Admin!</h1>
            <div id="dashboard">
                <button onClick={alertMe}> Admin</button>
                <button onClick={consoleOut}> Tasks</button>
                <button> Notes</button>
            </div>
        </div>
    );
}