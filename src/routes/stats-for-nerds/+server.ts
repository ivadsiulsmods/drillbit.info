import { redirect } from "@sveltejs/kit";

export const GET = () => {
	throw redirect(308, "/extra-info#stats-for-nerds");
};
