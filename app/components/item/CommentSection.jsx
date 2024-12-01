import MoreComment from "./MoreComment.jsx"

export default function CommentSection(props) {
  return(
    <div className="p-2">
      <div>
        <h1 className="text-2xl font-bold">Comment</h1>
      </div>
      <form onSubmit={props.submit}>
        <textarea className="border-2 rounded w-full p-3" value={props.text} onChange={props.changeText} />
        <button className="bg-orange-700 text-white font-bold rounded w-full p-3" type="submit">Submit</button>
      </form>
      <div className="mt-3">
        <h1 className="text-2xl font-bold">More comment</h1>
        <MoreComment/>
      </div>
    </div>
    )
}