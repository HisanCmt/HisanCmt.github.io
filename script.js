let pkmn1 = {
    Pokemon: "Snorlax",
    Role: "Defensive & Melee",
    Difficulty: "Novice",
    Best_Stats: "Endurance",
    Description: "Snorlax can take a lot of hits. It’s a dependable Pokémon that can protect its allies from harm.",
    FilePath: "images/snorlax.png"
}

let pkmn2 = {
    Pokemon: "Absol",
    Role: "Speedster & Melee",
    Difficulty: "Expert",
    Best_Stats: "Offense & Mobility",
    Description: "SnorAbsol is a Pokémon that can close the distance in an instant and deal massive amounts of damage.",
    FilePath: "images/absol.png"
}

let pkmn3 = {
    Pokemon: "Garachommp",
    Role: "All-Rounder & Melee",
    Difficulty: "Intermediate",
    Best_Stats: "Offense & Endurance",
    Description: "Garchomp’s Ability, Rough Skin, means it can sometimes cause damage to Pokémon that hit it, so opponents that attack Garchomp carelessly may just get struck back. What’s more, using Dig lets Garchomp sneak-attack its opponents from underground.",
    FilePath: "images/garachomp.png"
}

let pkmn4 = {
    Pokemon: "Crustle",
    Role: "All-Rounder & Melee",
    Difficulty: "Intermediate",
    Best_Stats: "Offense & Endurance",
    Description: "Garchomp’s Ability, Rough Skin, means it can sometimes cause damage to Pokémon that hit it, so opponents that attack Garchomp carelessly may just get struck back. What’s more, using Dig lets Garchomp sneak-attack its opponents from underground.",
    FilePath: "images/crustle.png"
}

let pkmnArray = [pkmn1, pkmn2, pkmn3, pkmn4];

let pokemon = document.getElementById("pokemon-details");

let line = document.createElement("hr");
pokemon.appendChild(line);

for (let i = 0; i < pkmnArray.length; i++){

    let item_div = document.createElement("div");
    item_div.style["display"] = "flex";

    let info = pkmnArray[i];
    let info_list = document.createElement("ul");
    info_list.classList.add("grow");

    let detail1 = document.createElement("li");
    detail1.innerHTML = "Pokemon Name: " + info.Pokemon;
    info_list.appendChild(detail1);

    let detail2 = document.createElement("li");
    detail2.innerHTML = "The Role: " + info.Role;
    info_list.appendChild(detail2);

    let detail3 = document.createElement("li");
    detail3.innerHTML = "Difficulty: " + info.Difficulty;
    info_list.appendChild(detail3);

    let detail4 = document.createElement("li");
    detail4.innerHTML = "Best Stats: " + info.Best_Stats;
    info_list.appendChild(detail4);

    let detail5 = document.createElement("li");
    detail5.innerHTML = "Description: " + info.Description;
    info_list.appendChild(detail5);

    let hr = document.createElement("hr");

    let image = document.createElement("img");
    image.src=info.FilePath;

    item_div.appendChild(image);
    item_div.appendChild(info_list);
    item_div.classList.add("grow");

    pokemon.appendChild(item_div);
    pokemon.appendChild(hr);
}