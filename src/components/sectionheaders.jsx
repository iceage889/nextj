export default function SectionHeaders({ title, subtitle }) {
  return (
    <div>
      <div className="grid items-center gap-2 p-6 mb-4 md:mb-0">
        <div className="flex gap-4">
          <div className="w-4 h-6 bg-red-500 rounded-sm "></div>
          <p className="text-red-500 font-semibold">{title}</p>
        </div>
        <h2 className="text-3xl md:text-9 font-bold mr-4">{subtitle}</h2>
      </div>
    </div>
  );
}
