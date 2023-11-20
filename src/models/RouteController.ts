/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigation } from "@/hooks/useNavigation";
import useCurrentUser from "@/hooks/userCurrentUser";
import { useEffect } from "react";

export const RouteController = () => {
    const { data: user } = useCurrentUser();
    const { navigateTo, getCurrentPath } = useNavigation();

    const protectedPages = ['/', '/profile'];

    useEffect(() => {
        const currentPath = getCurrentPath();

        if (protectedPages.includes(currentPath) && !user) {
            navigateTo({ path: '/auth' });
        };
        
        if (currentPath === '/auth' && user) {
            navigateTo({ path: '/profile' });
        };

    }, [getCurrentPath, navigateTo, user, protectedPages]);

};