const roles = { 1: "tank", 2: "damage", 3: "support" };

const heroes = [

    {
        name: "D.Va",
        role: 1
    },
    {
        name: "Junker Queen",
        role: 1
    },
    {
        name: "Orisa",
        role: 1
    },
    {
        name: "Reinhardt",
        role: 1
    },
    {
        name: "Zarya",
        role: 1
    },
    {
        name: "Ashe",
        role: 2
    },
    {
        name: "Cassidy",
        role: 2
    },
    {
        name: "Freja",
        role: 2
    },
    {
        name: "Genji",
        role: 2
    },
    {
        name: "Mei",
        role: 2
    },
    {
        name: "Reaper",
        role: 2
    },
    {
        name: "Soldier: 76",
        role: 2
    },
    {
        name: "Ana",
        role: 3
    },
    {
        name: "Juno",
        role: 3
    },
    {
        name: "Kiriko",
        role: 3
    },
    {
        name: "Lucio",
        role: 3
    },
    {
        name: "Mercy",
        role: 3
    },
    {
        name: "Moira",
        role: 3
    },

];

const powers = [
    {
        "Ana": [{
            power: "No Scope Needed",
            description: "Landing shots with [Biotic Rifle] grants 10% Attack Speed for 2s, stacking up to 3 times.",
            icon: "",
            ability: "Biotic Rifle",
        },
        {
            power: "Pinpoint Prescription",
            description: "Biotic Rifle] can now critically hit both allies and enemies.",
            icon: "",
            ability: "Biotic Rifle",
        },
        {
            power: "Tactical Rifle",
            description: "While scoped, [Biotic Rifle] will lock on to allies for guaranteed hits.",
            icon: "",
            ability: "Biotic Rifle",
        },
        {
            power: "Comfy Cloud",
            description: "[Sleep Dart] explodes on contact, hitting targets within 3m, but Sleep has 50% reduced duration.",
            icon: "",
            ability: "Sleep Dart",
        },
        {
            power: "Dreamy",
            description: "[Sleep Dart] can hit allies, healing 80% of their max Life over 4s instead of putting them to sleep.",
            icon: "",
            ability: "Sleep Dart",
        },
        {
            power: "Sleep Regimen",
            description: "Gain 50 Health.\nWhen you apply Sleep to an enemy gain 10 Health, up to 150.",
            icon: "",
            ability: "Sleep Dart",
        },
        {
            power: "Home Remedy",
            description: "[Biotic Grenade] grants Overhealth equal to 200% of its healing.",
            icon: "",
            ability: "Biotic Grenade",
        },
        {
            power: "Time Out",
            description: "[Biotic Grenade] now knocks enemies back and reduces their Move Speed by 50% for 1s.",
            icon: "",
            ability: "Biotic Grenade",
        },
        {
            power: "Venomous",
            description: "[Biotic Grenade] deals an additional 50 (AP) damage over its duration to enemies affected.",
            icon: "",
            ability: "Biotic Grenade",
        },
        {
            power: "My Turn",
            description: "[Nano Boost] also applies to yourself for 50% of its duration.",
            icon: "",
            ability: "Nano Boost",
        },
        {
            power: "Our Turn",
            description: "[Nano Boost] also affects other allies in your line of sight, but it has 50% reduced duration on them.",
            icon: "",
            ability: "Nano Boost",
        },
        {
            power: "Your Full Potential",
            description: "[Nano Boost] also grants the target 20% Ultimate Charge and 200 (AP) Overhealth.",
            icon: "",
            ability: "Nano Boost",
        }]
    }
];

const items = [
    {
        "weapon": {
            "common": [{
                name: "Compensator",
                price: 1000,
                description: "5% Weapon Power",
                icon: "",
            },
            {
                name: "Plasma Converter",
                price: 1000,
                description: "10% Weapon Lifesteal",
                icon: "",
            },
            {
                name: "Weapon Grease",
                price: 1000,
                description: "5% Attack Speed",
                icon: "",
            },
            {
                name: "Ammo Reserves",
                price: 1500,
                description: "20% Max Ammo",
                icon: "",
            },
            {
                name: "Frenzy Amplifier",
                price: 1500,
                description: "Eliminations grant 10% Attack Speed and 15% Move Speed for 3s.",
                icon: "",
            }
            ],
            "rare": [{}],
            "epic": [{}]
        }
    },
    {
        "ability":
        {
            "common": [{
                name: "Charged Plating",
                price: 1000,
                description: "After you spend your Ultimate Charge, gain 25 Armor and 10% Ability Power for the rest of the round.",
                icon: "",

            }],
            "rare": [{}],
            "epic": [{}]
        }
    },
    { "survival": { "common": [{}], "rare": [{}], "epic": [{}] } }
];