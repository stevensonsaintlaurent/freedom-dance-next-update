import { getClasses } from "../_lib/data-service";
import ClasseCard from "./ClasseCard";
export const metadata = {
  title: "Classes",
};

async function ClassList() {
  const classes = await getClasses();
  if (!classes.length) return null;
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {classes.map((danceClass) => (
        <ClasseCard danceClass={danceClass} key={danceClass.id} />
      ))}
    </div>
  );
}

export default ClassList;
