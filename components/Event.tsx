import { NextPage } from "next";
import Image from "next/image";
import Button, { ButtonTypes } from "./Button";
import { RightArrow } from "./Icons";
import Clock from "./Icons/Clock";
import Location from "./Icons/Location";

const Event: NextPage = () => {
  return (
    <div className="flex gap-4 md:gap-8">
      <div className="relative -z-10 aspect-square w-40 bg-light sm:w-56 lg:block lg:w-60 2xl:w-72 3xl:w-80">
        <Image
          className="h-full w-full"
          src="/hero-image.png"
          alt="Hero Image"
          layout="fill"
        />
      </div>
      <div className="flex flex-col justify-between gap-4 sm:gap-0">
        <div className="flex flex-col gap-2 sm:gap-4">
          <h4 className="text-xl font-semibold sm:text-2xl lg:text-3xl 2xl:text-4xl 3xl:text-5xl">
            Name of Event
          </h4>
          <a href="">
            <div className="flex cursor-pointer items-center gap-0.5 transition-all hover:text-accent sm:gap-2">
              <div className="hidden h-6 sm:block sm:h-8 3xl:h-10">
                <Location />
              </div>
              <p className="text-sm hover:underline sm:text-lg 2xl:text-xl 3xl:text-2xl">
                Bluebop Cafe, Mumbai
              </p>
            </div>
          </a>
          <div className="flex items-center gap-0.5 sm:gap-2">
            <div className="hidden h-6 sm:block sm:h-8 3xl:h-10">
              <Clock />
            </div>
            <p className="text-sm sm:text-lg 2xl:text-xl 3xl:text-2xl">
              7:00 pm onwards
            </p>
          </div>
        </div>
        <a
          href="https://bookmyshow.com"
          className="text-xs sm:text-lg lg:text-xl 2xl:text-xl 3xl:text-2xl"
        >
          <Button
            type={ButtonTypes.Secondary}
            text="Book tickets"
            icon={<RightArrow />}
          />
        </a>
      </div>
    </div>
  );
};

export default Event;
