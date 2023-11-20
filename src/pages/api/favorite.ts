import { NextApiRequest, NextApiResponse } from "next";
import { without } from "lodash";
import prismadb from '@/libs/prismadb';
import serverAuth from "@/libs/serverAuth";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method === 'POST') {
            const { currentUser } = await serverAuth(req, res);
            const { movieId } = req.body;
            const existingMovie = await prismadb.movie.findUnique({
                where: {
                    id: movieId,
                }
            });

            if (!existingMovie) {
                throw new Error('Invalid ID');
            }

            const user = await prismadb.user.update({
                where: {
                    email: currentUser.email || '',
                },
                data: {
                    favoriteIds: {
                        push: movieId,
                    }
                }
            });

            res.status(200).json(user);
        }

        if (req.method === 'DELETE') {
            const { currentUser } = await serverAuth(req, res);
            const { movieId } = req.body;
            const existingMovie = await prismadb.movie.findUnique({
                where: {
                    id: movieId,
                }
            });

            if (!existingMovie) {
                throw new Error('Invalid ID');
            }

            const updateFavoriteIds = without(currentUser.favoriteIds, movieId);
            const updateUser = await prismadb.user.update({
                where: {
                    email: currentUser.email || '',
                },
                data: {
                    favoriteIds: updateFavoriteIds,
                }
            });

            res.status(200).json(updateUser);
        }

        res.status(405).end();
    } catch (error) {
        console.log(error);
        res.status(400).end();
    }
};

export default handler;