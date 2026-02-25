import Link from "next/link";
import { getData } from "../_lib/data-service";

async function LoginMessage() {
  const { name } = await getData();
  let classNames;
  if (name === "Event Center" || name === "Jazz-Band") {
    classNames = "";
  } else if (name === "orchestra ") {
    classNames = "Rehaesal";
  } else {
    classNames = "Class";
  }
  return (
    <div className="grid bg-primary-800 ">
      <p className="text-center text-xl py-12 self-center">
        Please{" "}
        <Link href="/login" className="underline text-accent-500">
          login
        </Link>
        to reserve this
        <br />
        {classNames} right now
      </p>
    </div>
  );
}

export default LoginMessage;
