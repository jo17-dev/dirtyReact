import useHidding from "./useHidding.jsx";

const ShowHide = ()=>{

    const [hide, setHide] = useHidding(true);

    return (
        <div className="section">
            <h1>Customized hook to hide / show an text</h1>
            <button onClick={setHide}> { hide ? 'Show' : 'Hide' } </button>

            { hide ? '' : <h1 id="text-to-hide">Text to hide</h1> }
            
        </div>
    );
}

export default ShowHide;
// prochaine etape, faire passer le paramettre de depart en toogle