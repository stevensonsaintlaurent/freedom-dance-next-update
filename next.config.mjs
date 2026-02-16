// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "kwheetxienedgekhjquf.supabase.co",
//         port: "",
//         pathname: "/storage/v1/object/public/cabins-images/**",
//       },
//     ],
//   },
// };

// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["kwheetxienedgekhjquf.supabase.co"],
  },
};

export default nextConfig;
