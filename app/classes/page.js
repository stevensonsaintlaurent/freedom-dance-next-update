import { Suspense } from "react";
import ClassList from "../_components/ClassList";
import Spinner from "../_components/Spinner";

// export const revalidate = 0;

export const metadata = {
  title: "Classes",
};

export default function Page() {
  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        Our Luxury classes
      </h1>
      <p className="text-primary-200 text-lg mb-10">
        We&apos;re excited to have you join our community of artists and
        performers! Our studio offers a variety of dance classes and music
        lessons for all ages and skill levels. We also host events and workshops
        to celebrate creativity and connection. Thank you for being here, and we
        can’t wait to create and perform together!
      </p>
      <Suspense fallback={<Spinner />}>
        <ClassList />
      </Suspense>
    </div>
  );
}
