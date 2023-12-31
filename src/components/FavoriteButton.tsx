import axios from "axios";
import React, { useCallback, useMemo } from "react";
import useCurrentUser from "@/hooks/userCurrentUser";
import useFavorites from "@/hooks/useFavorites";
import { AiOutlinePlus, AiOutlineCheck } from "react-icons/ai";

interface FavoriteButtonProps {
    movieId : string;
};

const FavoriteButton = ({ movieId }: FavoriteButtonProps) => {
    const { mutate: mutateFavorites } = useFavorites();
    const { data: user, mutate } = useCurrentUser();

    const isFavorite = useMemo(() => {
        const list = user?.favoriteIds || [];

        return list.includes(movieId);
    }, [user, movieId]);

    const toggleFavorite = useCallback(async () => {
        let response;

        if (isFavorite) {
            response = await axios.delete(`/api/favorite`, { data: { movieId }});
        } else {
            response = await axios.post('/api/favorite', { movieId });
        }

        const updatedFavoriteIds = response?.data?.favoriteIds;

        mutate({ ...user, favoriteIds: updatedFavoriteIds });

        mutateFavorites();
    }, [movieId, isFavorite, user, mutate, mutateFavorites]);

    const Icon = isFavorite ? AiOutlineCheck : AiOutlinePlus;

    return (
        <div 
        onClick={toggleFavorite}
        className="
        cursor-pointer
        group/item
        w-6
        h-6
        lg:w-10
        lg:h-10
        border-white
        border-2
        rounded-full
        flex
        justify-center
        items-center
        transition
        hover:bg-neutral-300
        ">
            <Icon className="text-white" size={25} />
        </div>
    )
};

export default FavoriteButton;