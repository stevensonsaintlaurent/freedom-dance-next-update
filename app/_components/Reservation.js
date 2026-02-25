import { auth } from "../_lib/auth";
import { getBookedDatesByClassId, getSettings } from "../_lib/data-service";
import DateSelector from "./DateSelector";
import LoginMessage from "./LoginMessage";
import ReservationForm from "./ReservationForm";

async function Reservation({ classes }) {
  const [settings, bookedDates] = await Promise.all([
    getSettings(),
    getBookedDatesByClassId(classes.id),
  ]);

  const session = await auth();

  return (
    <div className="grid grid-cols-2 border border-primary-800 min-h-[400px]">
      <DateSelector
        bookedDates={bookedDates}
        settings={settings}
        classes={classes}
      />
      {session ? (
        <ReservationForm classes={classes} user={session.user} />
      ) : (
        <LoginMessage />
      )}
    </div>
  );
}

export default Reservation;
