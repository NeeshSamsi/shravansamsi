import { NextPage } from "next";
import Image from "next/image";
import Button, { ButtonTypes } from "./Button";
import { RightArrow } from "./Icons";
import Clock from "./Icons/Clock";
import Location from "./Icons/Location";

const Event: NextPage = () => {
  return (
    <div className="flex gap-8">
      <div className="relative -z-10 aspect-square w-64 bg-light lg:block">
        <Image
          className="h-full w-full"
          src="/hero-image.png"
          alt="Hero Image"
          layout="fill"
        />
      </div>
      <div className="flex flex-col justify-between">
        <div className="flex flex-col gap-4">
          <h4 className="text-4xl font-semibold">Name of Event</h4>
          <div className="flex items-center gap-2">
            <div className="h-8">
              <Location />
            </div>
            <p className="text-xl">Bluebop Cafe, Mumbai</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-8">
              <Clock />
            </div>
            <p className="text-xl">7:00 pm onwards</p>
          </div>
        </div>
        <a href="https://bookmyshow.com" className="text-lg">
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
