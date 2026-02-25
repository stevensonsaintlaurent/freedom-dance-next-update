import { getBookedDatesByClassId, getClass } from "../../../_lib/data-service";

export async function GET(request, { params }) {
  const { classId } = params;

  try {
    const [danceClass, bookedDates] = await Promise.all([
      getClass(classId),
      getBookedDatesByClassId(classId),
    ]);

    return Response.json({ danceClass, bookedDates });
  } catch {
    return Response.json({ error: "Failed to fetch data" }, { status: 500 });
  }
}

// export async function GET({ params }) {
//   console.log("params --------------:", params);
//   return Response.json({ test: "steveson" });

//   const classs = getClass();
//   console.log(classs);
// }
