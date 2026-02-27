import { auth } from "../_lib/auth";

export const metadata = {
  title: "Dancer area",
};

export async function Page() {
  const session = await auth();
  console.log("session account:", session);
  const firstName = session.user.name.slice(0, 13);
  return (
    <h2 className="font-semibold text-2xl text-accent-400 mb-7">
      Welcome to your dancer area! Choose an option from the menu to get
      started.
      <br />
      {firstName}
    </h2>
  );
}

export default Page;
