export default function Home() {
    
    function alertMe() {
        alert("click!");
    }

    return (
        <div>
            <h1>Hello Admin!</h1>
            <div id="dashboard">
                <button onClick={alertMe}> Admin</button>
                <button> Tasks</button>
                <button> Notes</button>
            </div>
        </div>
    );
}