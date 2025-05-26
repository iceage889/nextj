import Images from "@/components/images";
import SectionHeaders from "@/components/sectionheaders";

export default function ArrivalSection() {
  const banners = [
    {
      title: "PlayStation 5",
      desc: "Black and White version of the PS5 coming out on sale.",
      image: Images.ps5slim.src,
      colSpan: "col-span-2 row-span-2",
    },
    {
      title: "Women’s Collections",
      desc: "Featured woman collections that give you another vibe.",
      image: Images.woman.src,
      colSpan: "lg:col-span-2",
    },
    {
      title: "Speakers",
      desc: "Amazon wireless speakers",
      image: Images.threespeaker.src,
    },
    {
      title: "Perfume",
      desc: "GUCCI INTENSE OUD EDP",
      image: Images.perfume.src,
    },
  ];
  return (
    <div>
      <div>
        <SectionHeaders title={"Featured"} subtitle={"New Arrival"} />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {banners.map((item, idx) => (
          <div
            key={idx}
            className={`relative group rounded-lg overflow-hidden bg-black ${
              item.colSpan ?? ""
            }`}
          >
            <img
              src={item.image}
              alt={item.title}
              className="object-cover w-full group-active:scale-110 group-hover:scale-110 transition-all"
            />
            <div className="absolute inset-0 p-4 flex flex-col justify-end">
              <h3 className="text-white font-semibold text-lg">{item.title}</h3>
              <p className="text-gray-200 text-sm mb-2">{item.desc}</p>
              <button className="text-white text-sm underline hover:text-gray-300">
                Shop Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
