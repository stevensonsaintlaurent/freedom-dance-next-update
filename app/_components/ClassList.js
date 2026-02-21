// "use client";

// import { useEffect, useState } from "react";

import { getData } from "../_lib/data-service";
import ClasseCard from "./ClasseCard";
// import { supabase } from "../_lib/supabase";

export const metadata = {
  title: "Classes",
};

async function ClassList({ filter }) {
  // const [classes, setClasses] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   async function fetchClasses() {
  //     const { data, error } = await supabase.from("classes").select("*");

  //     if (error) {
  //       setError(error.message);
  //     } else {
  //       setClasses(data);
  //     }

  //     setLoading(false);
  //   }

  //   fetchClasses();
  // }, []);
  const classes = await getData();

  if (!classes.length) return null;
  let displayedClasses;
  if (filter === "all") displayedClasses = classes;
  if (filter === "small")
    displayedClasses = classes.filter((c) => c.maxCapacity <= 20);
  if (filter === "medium")
    displayedClasses = classes.filter(
      (c) => c.maxCapacity > 20 && c.maxCapacity <= 50,
    );
  if (filter === "large")
    displayedClasses = classes.filter((c) => c.maxCapacity >= 150);

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {displayedClasses.map((danceClass) => (
        <ClasseCard danceClass={danceClass} key={danceClass.id} />
      ))}
    </div>
  );
}

export default ClassList;
