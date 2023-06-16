export default function InputForm({inputText, displayValue, formSubmit, onValueChange}) {
    
    return(
        <form onSubmit={formSubmit} className="new-item-form">
            <p>{inputText}</p>
            <input type="text" value={displayValue} onChange={onValueChange}/>
            <button className="btn">Enter</button>
        </form>
        )
}