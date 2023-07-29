
import { NextApiRequest, NextApiResponse } from "next";
import { sendResponse } from "@helper/response";
import { RESPONSES } from "../response";
import { GITHUB_API_BASE_URL } from "@constant";

export async function GET(request: NextApiRequest) {
    try {
        const currentYear = new Date().getFullYear();
        const response = await fetch(`${GITHUB_API_BASE_URL}?y=${currentYear}`);
        const data = await response.json();

        return sendResponse(200, RESPONSES.GITHUB_LIST(data));
    } catch (error) {
        console.trace(error);
    }
}