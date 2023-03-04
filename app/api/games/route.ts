import { NextApiRequest, NextApiResponse } from "next";
import { games } from "@firebase/index";
import { GameType } from "@firebase/games/type";
import { sendResponse } from "@helper/response";
import { RESPONSES } from "../response";

export async function GET(request: NextApiRequest){
  try{
    const gameArray: Array<GameType> = await games.getGames();
    return sendResponse(200, RESPONSES.GAMES_LIST(gameArray));
  } catch(error){
    console.trace(error);
  }
}