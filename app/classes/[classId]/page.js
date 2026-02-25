import Class from "@/app/_components/Class";
import Reservation from "@/app/_components/Reservation";
import Spinner from "@/app/_components/Spinner";
import {
  getBookedDatesByClassId,
  getClass,
  getData,
  getSettings,
} from "@/app/_lib/data-service";
import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { Suspense } from "react";

// // PLACEHOLDER DATA
// const cabin = {
//   id: 89,
//   name: "001",
//   maxCapacity: 2,
//   regularPrice: 250,
//   discount: 0,
//   description:
//     "Discover the ultimate luxury getaway for couples in the cozy wooden cabin 001. Nestled in a picturesque forest, this stunning cabin offers a secluded and intimate retreat. Inside, enjoy modern high-quality wood interiors, a comfortable seating area, a fireplace and a fully-equipped kitchen. The plush king-size bed, dressed in fine linens guarantees a peaceful nights sleep. Relax in the spa-like shower and unwind on the private deck with hot tub.",
//   image:
//     "https://dclaevazetcjjkrzczpc.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg",
// };

export async function generateMetadata({ params }) {
  const { name } = await getClass(params.classId);

  let classNames;
  if (name === "orchestra" || name === "Event Center" || name === "Jazz-Band") {
    classNames = "";
  } else {
    classNames = "class";
  }

  return {
    title: ` ${name}  ${classNames}`,
  };
}

export async function generateStaticParams() {
  const classes = await getData();
  const ids = classes.map((danceClass) => ({ classId: String(danceClass.id) }));

  return ids;
}

export default async function Page({ params }) {
  const danceClass = await getClass(params.classId);
  const settings = await getSettings();
  const bookedDate = await getBookedDatesByClassId(params.classId);
  const { name } = danceClass;

  let classNames;
  if (name === "Event Center" || name === "Jazz-Band") {
    classNames = "";
  } else if (name === "orchestra ") {
    classNames = "Rehaesal";
  } else {
    classNames = "Class";
  }

  return (
    <div className="max-w-6xl mx-auto mt-8">
      <Class classes={danceClass} classNames={classNames} />

      <div>
        <h2 className="text-5xl font-semibold text-center mb-10 text-accent-400">
          Reserve {name} {classNames} today. Pay on arrival.
        </h2>
        <Suspense fallback={<Spinner />}>
          <Reservation classes={danceClass} />
        </Suspense>
      </div>
    </div>
  );
}
