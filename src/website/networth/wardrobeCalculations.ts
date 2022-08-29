import axios from "axios";

export default async function calculateWardrobePrice(profile: any) {
    const wardrobeItems = profile.items.wardrobe;

    const returnItems: Array<any> = [];

    var wardrobePrice = 0;

    for (let i = 0; i < wardrobeItems.length; i++) {
        for (let j = 0; j < wardrobeItems[i]?.length; j++) {
            var completed = true;

            const response = await axios.get("https://skyblock.acebot.xyz/api/auctions/quickStats/" + wardrobeItems[i][j]?.tag.ExtraAttributes.id).catch((err) => {
                completed = false;
            });

            if (!completed) continue;

            if (typeof (response) == "string" || response == undefined) {
                return "Failed getting wardrobe data.";
            };

            if (wardrobeItems[i][j].recombobulated == true) {
                //response.data.data.mode

                const apiresponse = await axios.get("https://api.hypixel.net/skyblock/bazaar").catch((err) => {

                });

                if (apiresponse != undefined) {
                    response.data.data.mode += (Math.ceil(apiresponse.data.products.RECOMBOBULATOR_3000.quick_status.sellPrice * (3 / 4)));
                }
            }

            if (wardrobeItems[i][j].tag.ExtraAttributes.hot_potato_count > 0) {
                var hotPotatoPrice;
                var fumingPotatoPrice;
                const apiresponse = await axios.get("https://api.hypixel.net/skyblock/bazaar").catch((err) => {

                });
                if (apiresponse != undefined) {
                    hotPotatoPrice = (Math.ceil(apiresponse.data.products.HOT_POTATO_BOOK.quick_status.sellPrice * (3 / 4)));
                    fumingPotatoPrice = (Math.ceil(apiresponse.data.products.FUMING_POTATO_BOOK.quick_status.sellPrice * (3 / 4)));
                }
                for (let l = 0; l < wardrobeItems[i][j]?.tag.ExtraAttributes.hot_potato_count; l++) {
                    if (l <= 10) response.data.data.mode += hotPotatoPrice;
                    else {
                        response.data.data.mode += fumingPotatoPrice;
                    };
                }
            }

            const apiresponse = await axios.get("https://api.hypixel.net/skyblock/bazaar").catch((err) => {

            });
            if (apiresponse != undefined) {
                for (const key in wardrobeItems[i][j].tag.ExtraAttributes.enchantments) {
                    var enchantName = `ENCHANTMENT_${key.toUpperCase()}_${wardrobeItems[i][j].tag.ExtraAttributes.enchantments[key]}`;

                    if (enchantName.includes("HECATOMB")) {
                        enchantName = `ENCHANTMENT_${key.toUpperCase()}_1`

                        var level : Number = Number(wardrobeItems[i][j].tag.ExtraAttributes.enchantments[key]);
                        console.log(level);
                        for(let g = 0; g < level; g++) {
                            response.data.data.mode += 500000;
                        }
                    };

                    var enchantPrice = Math.ceil(apiresponse.data.products[enchantName]?.quick_status.sellPrice * (3 / 4));

                    if (enchantPrice != null && !isNaN(enchantPrice)) {
                        response.data.data.mode += enchantPrice;
                    }
                }
                var firstStarPrice = Math.ceil(apiresponse.data.products.FIRST_MASTER_STAR.quick_status.sellPrice);
                var secondStarPrice = Math.ceil(apiresponse.data.products.SECOND_MASTER_STAR.quick_status.sellPrice);
                var thirdStarPrice = Math.ceil(apiresponse.data.products.THIRD_MASTER_STAR.quick_status.sellPrice);
                var fourthStarPrice = Math.ceil(apiresponse.data.products.FOURTH_MASTER_STAR.quick_status.sellPrice);
                var fifthStarPrice = Math.ceil(apiresponse.data.products.FIFTH_MASTER_STAR.quick_status.sellPrice);

                
                if(wardrobeItems[i][j].display_name.includes("➊")) {
                    response.data.data.mode += firstStarPrice;
                }
                if(wardrobeItems[i][j].display_name.includes("➋")) {
                    response.data.data.mode += firstStarPrice;
                    response.data.data.mode += secondStarPrice;
                }
                if(wardrobeItems[i][j].display_name.includes("➌")) {
                    response.data.data.mode += firstStarPrice;
                    response.data.data.mode += secondStarPrice;
                    response.data.data.mode += thirdStarPrice;
                    
                }
                if(wardrobeItems[i][j].display_name.includes("➍")) {
                    response.data.data.mode += firstStarPrice;
                    response.data.data.mode += secondStarPrice;
                    response.data.data.mode += thirdStarPrice;
                    response.data.data.mode += fourthStarPrice;

                }
                if(wardrobeItems[i][j].display_name.includes("➎")) {
                    response.data.data.mode += firstStarPrice;
                    response.data.data.mode += secondStarPrice;
                    response.data.data.mode += thirdStarPrice;
                    response.data.data.mode += fourthStarPrice;
                    response.data.data.mode += fifthStarPrice;
                }
                var roughness = "";
    
                var gem;
                for (const key in wardrobeItems[i][j].extra?.gems) {
                    if(roughness == "") gem = undefined;
                    if(key.includes("jasper".toUpperCase())) {
                        gem = wardrobeItems[i][j].extra.gems[key] + "_JASPER_GEM";
                    }
                    if(key.includes("ruby".toUpperCase())) {
                        gem = wardrobeItems[i][j].extra.gems[key] + "_RUBY_GEM";
                    }
                    if(key.includes("amethyst".toUpperCase())) {
                        gem = wardrobeItems[i][j].extra.gems[key] + "_AMETHYST_GEM";
                    }
                    if(key.includes("jade".toUpperCase())) {
                        gem = wardrobeItems[i][j].extra.gems[key] + "_JADE_GEM";
                    }
                    if(key.includes("opal".toUpperCase())) {
                        gem = wardrobeItems[i][j].extra.gems[key] + "_OPAL_GEM";
                    }
                    if(key.includes("topaz".toUpperCase())) {
                        gem = wardrobeItems[i][j].extra.gems[key] + "_TOPAZ_GEM";
                    }
                    if(key.includes("sapphire".toUpperCase())) {
                        gem = wardrobeItems[i][j].extra.gems[key] + "_SAPPHIRE_GEM";
                    }
                    if(key.includes("amber".toUpperCase())) {
                        gem = wardrobeItems[i][j].extra.gems[key] + "_AMBER_GEM";
                    }
    
                    if(key.includes("COMBAT") && !key.includes("_gem")) {
                        roughness = wardrobeItems[i][j].extra.gems[key];
                        continue;
                    }
    
                    if(key.includes("OFFENSIVE") && !key.includes("_gem")) {
                        roughness = wardrobeItems[i][j].extra.gems[key];
                        continue;
                    }
    
                    if(key.includes("DEFENSIVE") && !key.includes("_gem")) {
                        roughness = wardrobeItems[i][j].extra.gems[key];
                        continue;
                    }
    
                    if(key.includes("MINING") && !key.includes("_gem")) {
                        roughness = wardrobeItems[i][j].extra.gems[key];
                        continue;
                    }
    
                    if(key.includes("UNIVERSAL") && !key.includes("_gem")) {
                        roughness = wardrobeItems[i][j].extra.gems[key];
                        continue;
                    }
    
                    if(roughness != "") {
                        gem = roughness + "_" + wardrobeItems[i][j].extra.gems[key] + "_GEM";
                        roughness = "";
                    }
    
                    if(gem != undefined) {
                        var gemPrice = Math.ceil(apiresponse.data.products[gem]?.quick_status.sellPrice);

                        if (gemPrice != null && !isNaN(gemPrice)) {
                            response.data.data.mode += gemPrice;
                        }
                    }
                }
            }


            wardrobeItems[i][j].price = response.data.data.mode;
            returnItems.push(wardrobeItems[i][j]);
            if (typeof (response.data.data.mode) == "number") {
                wardrobePrice += response.data.data.mode
            } else {
                var price = +response.data.data.mode;

                try {
                    wardrobePrice += price;
                } catch (err) {
                    console.error(err);
                }
            }
        }
    }

    return {
        total: wardrobePrice,
        items: returnItems
    };
}