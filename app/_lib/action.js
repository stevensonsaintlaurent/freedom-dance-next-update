"use server";
import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import { supabase } from "./supabase";
import { getBookings } from "./data-service";

// ======================== Update Profile =========================
export async function updateProfile(formData) {
  const session = await auth();
  if (!session) throw new Error("You must log in ");
  const nationalID = formData.get("nationalID");
  const [nationality, countryFlag] = formData.get("nationality").split("%");
  if (!/^[a-zA-Z0-9]{6,12}$/.test(nationalID))
    throw new Error("please provide valide national Id");
  const updateData = { nationalID, nationality, countryFlag };
  const { data, error } = await supabase
    .from("guests")
    .update(updateData)
    .eq("id", session.user.guestId);

  if (error) throw new Error("Guest could not be updated");
}
export async function signInAction() {
  await signIn("google", { redirectTo: "/account" });
}
// ======================== Delete Reservation =========================
export async function deleteReservation(bookingId) {
  const session = await auth();
  if (!session) throw new Error("You must log in ");
  const { data, error } = await supabase.from("bookings").delete().eq("id", id);
  const guestBooking = await getBookings(session.user.guestId);
  const guestBookingsIds = guestBookingsIds.map((booking) => booking.id);

  if (!guestBookingsIds.includes(bookingId))
    throw new Error("You are not allowed to delete this booking");
  if (error) {
    console.error(error);
    throw new Error("Booking could not be deleted");
  }
  revalidatePath("/account/reservations");
}

// ======================== Sign Out =========================
export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}
