function SearchBox(props){
    const { value, onValueChange, placeholder } = props;
    return(
        <div>
        <input type='text'
        className = 'search'
        placeholder ={placeholder}
        value={value}
        onChange={(event) => {onValueChange(event.target.value)}}
        />
        </div>
    );
}

export default SearchBox;