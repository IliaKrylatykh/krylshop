import { cn } from "@/shared/ui/utils";
import Image from "next/image";
import BirdImage from "@/shared/images/categories-bird.jpg";
import AnimalImage from "@/shared/images/categories-animal.jpg";
import FlowerImage from "@/shared/images/categories-flower.jpg";

export default function CategoriesPage() {
  return (
    <main className="py-14 container">
      <h1 className="mb-12 text-6xl">Categories</h1>
      <div className="flex flex-col md:flex-row space-x-0 md:space-x-4 space-y-4 md:space-y-0">
        <div className="relative overflow-hidden rounded-md flex-none w-full md:w-[600px] h-[500px] md:h-[1000px]">
          <Image
            src={FlowerImage}
            alt="flower"
            layout="fill"
            objectFit="cover"
            className={cn("transition-all hover:scale-105")}
          />
          <div className="absolute top-0 left-0 p-4 bg-black bg-opacity-50">
            <p className="text-white">Flowers</p>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <div className="relative overflow-hidden rounded-md flex-none w-full md:w-[600px] h-[250px] md:h-[500px]">
            <Image
              src={BirdImage}
              alt="birds"
              layout="fill"
              objectFit="cover"
              className={cn("transition-all hover:scale-105")}
            />
            <div className="absolute top-0 left-0 p-4 bg-black bg-opacity-50">
              <p className="text-white">Birds</p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-md flex-none w-full md:w-[600px] h-[250px] md:h-[500px]">
            <Image
              src={AnimalImage}
              alt="animals"
              layout="fill"
              objectFit="cover"
              className={cn("transition-all hover:scale-105")}
            />
            <div className="absolute top-0 left-0 p-4 bg-black bg-opacity-50">
              <p className="text-white">Animals</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
