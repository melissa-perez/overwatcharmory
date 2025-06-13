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
                details: "",
                icon: "",
            },
            {
                name: "Plasma Converter",
                price: 1000,
                description: "10% Weapon Lifesteal",
                details: "",
                icon: "",
            },
            {
                name: "Weapon Grease",
                price: 1000,
                description: "5% Attack Speed",
                details: "",
                icon: "",
            },
            {
                name: "Ammo Reserves",
                price: 1500,
                description: "20% Max Ammo",
                details: "",
                icon: "",
            },
            {
                name: "Frenzy Amplifier",
                price: 1500,
                description: "",
                details: "Eliminations grant 10% Attack Speed and 15% Move Speed for 3s.",
                icon: "",
            }
            ],
            "rare": [{
                name: "Aftermarket Firing Pin",
                price: 3750,
                description: "10% Attack Speed\n5% Move Speed",
                details: "",
                icon: "",
            },
            {
                name: "Advanced Nanobiotics",
                price: 4000,
                description: "5% Weapon Power ",
                details: "After healing an ally, gain 10% Attack Speed for 3s.",
                icon: "",
            },
            {
                name: "Shieldbuster",
                price: 4000,
                description: "5% Weapon Power ",
                details: "After dealing damage to Shields or Armor, gain 15% Attack Speed for 1s.",
                icon: "",
            },
            {
                name: "Stockpile",
                price: 4000,
                description: "5% Attack Speed\n25% Max Ammo",
                details: "",
                icon: "",
            },
            {
                name: "Technoleech",
                price: 4500,
                description: " 5% Weapon Power\n10% Weapon Lifesteal",
                details: "",
                icon: "",
            },
            {
                name: "Icy Coolant",
                price: 5500,
                description: "10% Weapon Power\n5% Cooldown Reduction",
                details: "",
                icon: "",
            },
            {
                name: "Talon Modification Module",
                price: 6000,
                description: "15% Weapon Power",
                details: "",
                icon: "",
            }],
            "epic": [{
                name: "Codebreaker",
                price: 9000,
                description: "15% Weapon Power",
                details: "Ignore 50% of Armor's damage reduction.",
                icon: "",
            }, {
                name: "Salvaged Slugs",
                price: 9500,
                description: "10% Attack Speed\n30% Increased Damage to Barriers",
                details: "Dealing Weapon Damage to Barriers has a 50% chance to restore 1 ammo.",
                icon: "",
            }, {
                name: "Volskaya Ordnance",
                price: 9500,
                description: "10% Attack Speed",
                details: "Deal 5% more damage for every 100 Max Life the target has more than you, up to 20%.",
                icon: "",
            }, {
                name: "Weapon Jammer",
                price: 10000,
                description: "25 Armor\n10% Weapon Power",
                details: "Dealing Weapon Damage negates 10% of the target's bonus Attack Speed and increases your Attack Speed for 2s.",
                icon: "",
            }, {
                name: "Commander's Clip",
                price: 10000,
                description: "10% Attack Speed\n40% Max Ammo",
                details: "When you use an ability, restore 10% of your Max Ammo.",
                icon: "",
            }, {
                name: "Amari's Antidote",
                price: 11000,
                description: "25 Health\n15% Weapon Power",
                details: "While healing an ally below 50% Life with your weapon, deal 15% increased 15% increased Weapon Healing.",
                icon: "",
            }, {
                name: "Booster Jets",
                price: 11000,
                description: "20% Attack Speed",
                details: "When you use an ability, gain 10% Move Speed for 2s.",
                icon: "",
            }, {
                name: "El-Sa'ka Suppressor",
                price: 11000,
                description: "10% WeapIgnoreon Power",
                details: "Critical Hits apply 30% Healing Reduction to the target for 2s.",
                icon: "",
            }, {
                name: "Hardlight Accelerator",
                price: 11000,
                description: "10% Weapon Power\n10% Cooldown Reduction",
                details: "When you use an ability, gain 5% Weapon Power for 3s, stacking up to 3 times.",
                icon: "",
            }, {
                name: "The Closer",
                price: 14500,
                description: "20% Weapon Power\n10% Critical Damage",
                details: "Critical Hits reveal the target for 3s.",
                icon: "",
            }, {
                name: "Eye of the Spider",
                price: 14000,
                description: "25% Weapon Power",
                details: "Deal 10% increased damage to enemies below 30% Life.",
                icon: "",
            },]
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