import { useNavigation } from "@/hooks/useNavigation";
import useCurrentUser from "@/hooks/userCurrentUser";
import { useEffect } from "react";

export const ControlRoute = () => {
    const { data: user } = useCurrentUser();
    const { navigateTo, getCurrentPath } = useNavigation();

    useEffect(() => {
        if (getCurrentPath() === '/' && !user) {
            navigateTo({ path: '/auth' });
        };
        
        if (getCurrentPath() === '/auth' && user) {
            navigateTo({ path: '/profile' });
        };

        if (getCurrentPath() === '/profile' && !user) {
            navigateTo({ path: '/auth' });
        };
        
    }, [getCurrentPath, navigateTo, user]);

};