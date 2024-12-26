
import './css/Sell.css'
const Sell=()=>{
    return(
        <div className="sell">
            <form action="/sell">
            <p>Book name:</p><input type="text" value="" required/>
            <p>Author name:</p><input type="text" value="" required/>
            <p>Book Price:</p><input type="number" value="" min="0" required/>
            <p>Address:</p><input type="Textarea" value="" required/>
            <p>Contact no:</p><input type="number" value="" required/>
            <p>Upload book photo:</p><input type="file" required/>
            <br/> <br/>
            <input type="button" value="Sell"/>
            </form>
        </div>
    );
}

export default Sell
