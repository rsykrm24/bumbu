export default function SearchInput(props) {
  return(
    <div className="bg-orange-700 flex justify-center p-3">
      <form className="flex justify-between px-2 py-1 bg-white rounded w-[95%]" onSubmit={props.submit}>
        <input value={props.search} onChange={props.searchChange} type="text" className="outline-0 w-full" />
        <button type="submit">Search</button>
      </form>
    </div>
    )
}