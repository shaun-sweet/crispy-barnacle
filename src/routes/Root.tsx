import { Outlet } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { useGetCurrentUser } from "@/hooks";

export const Root = () => {
  // this looks funky, but we're just caching the current user
  useGetCurrentUser();

  return (
    <main className="min-h-screen flex flex-col">
      <NavBar />
      <section className="flex-1 p-6 pl-32 flex ">
        <Outlet />
      </section>
      <footer className="p-6">© 2024</footer>
    </main>
  );
};
