import ClasseCard from "@/app/_components/ClasseCard";
import { getClasses } from "../_lib/data-service";

export const metadata = {
  title: "Classes",
};

export default async function Page() {
  // CHANGE
  const classes = await getClasses();

  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        Our Luxury classes
      </h1>
      <p className="text-primary-200 text-lg mb-10">
        We&apos;re excited to have you join our community of artists and
        performers! Our studio offers a variety of dance classes and music
        lessons for all ages and skill levels. We also host events and workshops
        to celebrate creativity and connection. Thank you for being here, and we
        can’t wait to create and perform together!
      </p>

      {classes.length > 0 && (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
          {classes.map((danceClass) => (
            <ClasseCard danceClass={danceClass} key={danceClass.id} />
          ))}
        </div>
      )}
    </div>
  );
}
