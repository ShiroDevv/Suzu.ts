import getUUid from "../../minecraft/chatHandling/utils/getUuid.js";
import seperator from "../../importantFiles/utils/seperator.js";
import { API_KEY } from "../../importantFiles/env/envExports.js";
import { getProfile } from "../../minecraft/chatHandling/commands/weight.js";
import calculateWardrobePrice from "./wardrobeCalculations.js";
export default async function getNetworth(username : string, profileName : string | undefined) {
    const profile = await getProfile(username, profileName);

    if(typeof(profile) == "string" || undefined) return profile;

    profile.wardrobePrice = await calculateWardrobePrice(profile);

    if(profile == undefined || typeof(profile) == "string") return { error: profile };

    return profile;
}