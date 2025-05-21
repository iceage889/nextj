import BreadCrumb from "@/components/breadcrumb";
import Images from "@/components/images";
import imgAbout from "@/components/images";
import StatsSection from "./components/statsection";
import TeamCarousel from "./components/teamCarousel";
import FeatureCarousel from "./components/featureSection";

export default function About() {
  return (
    <div>
      <div>
        <BreadCrumb
          items={[
            {
              title: "Home",
              url: "/",
            },
            {
              title: "About",
              url: "/",
            },
          ]}
        />
      </div>
      <div className="flex flex-col-reverse justify-between  md:flex-row md:items-center ">
        <div className="flex flex-col gap-2 px-4 flex-1 xl:items-center">
          <h2 className="font-inter text-[54px] max-w-[525px] w-full">
            Our Story
          </h2>
          <div className="font-poppins flex flex-col gap-4 md:gap-[24px] lg:max-w-[525px]">
            <p>
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.
            </p>
            <p>
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </p>
          </div>
        </div>
        <div className="flex-1 xl:flex-none">
          <img
            src={Images.imgAbout.src}
            alt=""
            className="xl:max-w-[705px] xl:w-full"
          />
        </div>
      </div>

      <div>
        <StatsSection />
      </div>
      <div>
        <TeamCarousel />
        <FeatureCarousel />
      </div>
    </div>
  );
}
