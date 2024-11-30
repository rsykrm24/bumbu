export default function RelatedContent(props) {
  return(
    <div className="p-3">
      <h1 className="text-2xl font-bold">Related content</h1>
      <div className="grid grid-cols-2 gap-3">
        {
          props.card
        }
      </div>
    </div>
    )
}