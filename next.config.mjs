/** @type {import('next').NextConfig} */

const nextConfig = {
  // Using Partial Pre-rendering requires the latest@next-canary version.
  // You may not notice the difference in development, although PPR will improve performance in production.
  // Only use this if you want to use next-canary - which may cause conflicts in your project.
  //   experimental: {
  //     ppr: "incremental",
  //   },
};

export default nextConfig;
