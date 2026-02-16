export default function MangaResult({
    image,
}: any) {
    return (
        <div className="bg-slate-50 h-175 max-w-full rounded-xl shadow-md ">
          {image && (
            <img
              src={image}
              className="rounded-xl shadow-md max-w-full h-full"
            />
          )}

        </div>
    )
}