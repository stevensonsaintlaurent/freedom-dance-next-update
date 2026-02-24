import { getBookedDatesByClassId, getData } from "../_lib/data-service";

export async function GET(request, { params }) {
  const { classId } = params;
  try {
    const [danceClass, bookedData] = await Promise.all([
      getData(classId),
      getBookedDatesByClassId(classId),
    ]);

    return Response.json({ danceClass, bookedData });
  } catch {
    return Response.json({ error: "Failed to fetch data" }, { status: 500 });
  }
}
