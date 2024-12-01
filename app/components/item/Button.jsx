export default function Button() {
  return(
    <div className="flex justify-evenly">
      <button className="border-2 border-orange-700 rounded font-bold text-orange-700 w-[45%] py-2">Buy Now</button>
      <button className="border-2 border-orange-700 bg-orange-700 rounded text-white w-[45%] font-bold py-2">+Cart</button>
    </div>
    )
}