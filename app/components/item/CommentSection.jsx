export default function CommentSection() {
  return(
    <div className="p-2">
      <div>
        <h1 className="text-2xl font-bold">Comment</h1>
      </div>
      <div>
        <textarea className="border-2 rounded w-full p-3"></textarea>
        <button className="bg-orange-700 text-white font-bold rounded w-full p-3">Submit</button>
      </div>
    </div>
    )
}