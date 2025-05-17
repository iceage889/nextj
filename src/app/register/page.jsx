import Images from "@/components/images";
import RegisterForm from "./components/register-form";

export default function Register() {
  return (
    <div className="flex justify-center gap-10 lg:gap-20 xl:justify-start xl:gap-32  py-10 md:py-20">
      <div className="hidden md:block min-h-[781px]">
        <img
          src={Images.sideImage.src}
          alt=""
          className="h-full object-cover"
        />
      </div>
      <RegisterForm />
    </div>
  );
}
