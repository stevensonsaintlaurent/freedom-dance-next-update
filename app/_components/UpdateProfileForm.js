"use client";

import { useState } from "react";
import { updateProfile } from "../_lib/action";
import { useFormStatus } from "react-dom";

function UpdateProfileForm({ guests = {}, children }) {
  const [count, setCount] = useState(0);
  const { fullName, email, nationalID, countryFlag } = guests;

  return (
    <form
      action={updateProfile}
      className="bg-primary-900 py-8 px-12 text-lg flex gap-6 flex-col"
    >
      <div className="space-y-2">
        <label>Full name</label>
        <input
          name="fullName"
          disabled
          defaultValue={guests === null ? fullName : "Stevenson StLaurent"}
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
        />
      </div>

      <div className="space-y-2">
        <label>Email address</label>
        <input
          name="email"
          disabled
          defaultValue={
            guests === null ? email : "stevensonstlaurent@gmail.com"
          }
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
        />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label htmlFor="nationality">Date of birth</label>
          <img
            src={guests === null ? "countrylag" : countryFlag}
            alt="Date of birth"
            className="h-5 rounded-sm"
          />
        </div>
      </div>
      {children}
      <div className="space-y-2">
        <label htmlFor="nationalID">Preferred language</label>
        <input
          type="calendar"
          name="nationalID"
          defaultValue={guests === null ? "nationalID" : nationalID}
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
        />
      </div>

      <div className="flex justify-end items-center gap-6">
        <Button />
      </div>
    </form>
  );
}

export default UpdateProfileForm;

function Button() {
  const { pending } = useFormStatus();
  return (
    <button
      className="bg-accent-500 px-8 py-4 text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300"
      disabled={pending}
    >
      {pending ? "Updating..." : "  Update profile"}
    </button>
  );
}
