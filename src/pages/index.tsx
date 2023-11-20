import Billboard from "@/components/Billboard";
import InfoModal from "@/components/InfoModal";
import MovieList from "@/components/MovieList";
import Navbar from "@/components/Navbar";
import useFavorites from "@/hooks/useFavorites";
import useInfoModalStore from "@/hooks/useInfoModalStore";
import useMovieList from "@/hooks/useMovieList";
import useCurrentUser from "@/hooks/userCurrentUser";
import { ControlRoute } from "@/models/ControlRoute";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const { data: movies = [] } = useMovieList();
  const { data: favorites = [] } = useFavorites();
  const { isOpen, closeModal } = useInfoModalStore();
  /* const { data: user, isLoading } = useCurrentUser();
  const router = useRouter();

  useEffect(() => {
    if (!user && !isLoading) {
      router.push("/auth");
    }
  }) */

  ControlRoute();

  return (
    <>
      <InfoModal visible={isOpen} onClose={closeModal} />
      <Navbar />
      <Billboard />
      <div className="pb-40">
        <MovieList title="Trending Now" data={movies} />
        <MovieList title="My List" data={favorites} />
      </div>
    </>
  )
}
