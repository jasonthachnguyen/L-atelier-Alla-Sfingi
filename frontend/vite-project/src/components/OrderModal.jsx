export default function OrderModal({text, foodItem, children, modalState, modalToggle}){
    return <>
        <button 
        className="my-5 py-4 mx-5 bg-birthmark text-stone-200 text-xl rounded-full"
        onClick={ modalToggle }>
            {text}
        </button>
        
        {modalState && (
            <>
            <div className="flex fixed w-[100%] h-[100%] justify-center align-center top-0 left-0 bg-overlay">
                <div className="overlay bg-stone-100 w-240 m-auto p-[2%] border rounded-3xl shadow-2xl">
                    <div className="modal-content">
                        <button onClick={ modalToggle } className="text-end bg-birthmark text-stone-200 rounded-full px-5 py-2 ml-210">X</button>
                        {children}
                    </div>
                </div>
            </div>
            </>
        )}
    </>
}

