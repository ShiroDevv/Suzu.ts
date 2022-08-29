import { getProfile } from "../../minecraft/chatHandling/commands/weight.js";
import calculateWardrobePrice from "./wardrobeCalculations.js";
export default async function getNetworth(username, profileName) {
    const profile = await getProfile(username, profileName);
    if (typeof (profile) == "string" || undefined)
        return profile;
    profile.wardrobePrice = await calculateWardrobePrice(profile);
    if (profile == undefined || typeof (profile) == "string")
        return { error: profile };
    return profile;
}
