import { getBookedDatesByClassId, getSettings } from "../_lib/data-service";
import DateSelector from "./DateSelector";
import ReservationForm from "./ReservationForm";

async function Reservation({ classes }) {
  const [settings, bookedDate] = await Promise.all([
    getSettings(),
    getBookedDatesByClassId(classes.id),
  ]);

  return (
    <div className="grid grid-cols-2 border border-primary-800 min-h-[400px]">
      <DateSelector
        bookedDates={bookedDate}
        settings={settings}
        classes={classes}
      />
      <ReservationForm classes={classes} />
    </div>
  );
}

export default Reservation;
