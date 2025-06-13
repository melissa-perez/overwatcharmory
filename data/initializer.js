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

const generalItems = [
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
                description: "5% Weapon Power",
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
                description: "5% Weapon Power\n10% Weapon Lifesteal",
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
                description: "10% Weapon Power",
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
                description: "",
                details: "After you spend your Ultimate Charge, gain 25 Armor and 10% Ability Power for the rest of the round.",
                icon: "",

            }, {
                name: "Power Playbook",
                price: 1000,
                description: "10% Ability Power",
                details: "",
                icon: "",
            }, {
                name: "Shady Spectacles",
                price: 1000,
                description: "10% Ability Lifesteal",
                details: "",
                icon: "",
            }, {
                name: "Winning Attitude",
                price: 1500,
                description: "25 Health",
                details: "When you die, gain 15% Ultimate Charge.",
                icon: "",
            }],
            "rare": [{
                name: "Custom Stock",
                price: 3750,
                description: "5% Weapon Power\n10% Ability Power",
                details: "",
                icon: "",
            }, {
                name: "Biolight Overflow",
                price: 4000,
                description: " 25 Health\n5% Ability Power",
                details: "When you spend your Ultimate Charge, grant nearby allies 50 Overhealth for 3s.",
                icon: "",
            }, {
                name: "Energized Bracers",
                price: 4000,
                description: " 10% Ability Power\n10% Ability Lifesteal",
                details: "",
                icon: "",
            }, {
                name: "Junker Whatchamajig",
                price: 4000,
                description: "25% Starting Ultimate Charge",
                details: "",
                icon: "",
            }, {
                name: "Wrist Wraps",
                price: 4000,
                description: "% Ability Power\n10% Attack Speed",
                details: "",
                icon: "",
            }, {
                name: "Multi-Tool",
                price: 4500,
                description: " 10% Ability Power\n5% Cooldown Reduction",
                details: "",
                icon: "",
            }, {
                name: "Nano Cola",
                price: 6000,
                description: "20% Ability Power",
                details: "",
                icon: "",
            },],
            "epic": [{
                name: "Three-tap Tommygun",
                price: 9500,
                description: " 10% Ability Power\n10% Attack Speed",
                details: "After using an ability, your 3 next instances of Weapon Damage deal additional damage equal to 3% of the target's Life.",
                icon: "",
            }, {
                name: "Biotech Maximizer",
                price: 10000,
                description: " 25 Health\n10% Ability Power",
                details: "When you use an ability that heals, reduce its cooldown by 5% for each unique ally it heals.",
                icon: "",
            }, {
                name: "Catalytic Crystal",
                price: 10000,
                description: "15% Ability Power",
                details: "Ability Damage and Healing grants 20% more Ultimate Charge.",
                icon: "",
            }, {
                name: "Lumérico Fusion Drive",
                price: 10000,
                description: "50 Armor\n15% Ability Power ",
                details: "When you use an ability, restore 50 Armor or Shields over 2s.",
                icon: "",
            }, {
                name: "Superflexor",
                price: 10000,
                description: "25 Health\n10% Weapon Power",
                details: "When you deal Weapon Damage or Healing, gain 5% Ability Power for 3s, stacking up to 5 times.",
                icon: "",
            }, {
                name: "Cybervenom",
                price: 10500,
                description: "10% Ability Power\n5% Cooldown Reduction",
                details: "Dealing Ability damage applies 30% healing reduction for 2s.",
                icon: "",
            }, {
                name: "Iridescent Iris",
                price: 11000,
                description: "20% Ability Power\n10% Cooldown Reduction",
                details: "After spending your Ultimate Charge, gain 100 Overhealth for 3s.",
                icon: "",
            }, {
                name: "Liquid Nitrogen",
                price: 11000,
                description: " 25 Health\n10% Ability Power",
                details: "Dealing Ability Damage slows the target's Move Speed by 20% for 3s.",
                icon: "",
            }, {
                name: "Mark of the Kitsune",
                price: 11000,
                description: "10% Ability Power",
                details: "When you use an ability, your next instance of Weapon Damage or Healing deals 25 bonus damage or healing.",
                icon: "",
            }, {
                name: "Champion's Kit",
                price: 14000,
                description: "35% Ability Power",
                details: "",
                icon: "",
            },]
        }
    },
    {
        "survival": {
            "common": [{
                name: "Adrenaline Shot",
                price: 1500,
                description: "25 Health",
                details: "Health Packs grant 20% Move Speed for 5s and 50 Overhealth.",
                icon: "",
            }, {
                name: "Electrolytes",
                price: 1500,
                description: "",
                details: "At the start of the round and every time you respawn, gain 100 unrecoverable Overhealth.",
                icon: "",
            }, {
                name: "Field Rations",
                price: 1000,
                description: "10 Health ",
                details: "At the start of the round and when you first respawn, gain 20% Move Speed for 10s while out of combat.",
                icon: "",
            }, {
                name: "Armored Vest",
                price: 1500,
                description: "25 Armor ",
                details: "",
                icon: "",
            }, {
                name: "First Aid Kit",
                price: 1500,
                description: "25 Shields",
                details: "Reduce the time before your Life begins regenerating by 33%.",
                icon: "",
            }, {
                name: "Heartbeat Sensor",
                price: 1500,
                description: "5% Move Speed",
                details: "Enemies below 30% Life are Revealed to you.",
                icon: "",
            }, {
                name: "Siphon Gloves",
                price: 1500,
                description: "25 Health",
                details: "[Quick Melee] damage heals for 25 Life.",
                icon: "",
            }, {
                name: "Running Shoes",
                price: 1000,
                description: "10 Health",
                details: "At the start of the round and when you first respawn, gain 20% Move Speed for 10s while out of combat.",
                icon: "",
            }],
            "rare": [{
                name: "Reinforced Titanium",
                price: 3750,
                description: "25 Shields",
                details: "While you have Shields, take 15% reduced Ability Damage.",
                icon: "",
            }, {
                name: "Cushioned Padding",
                price: 4000,
                description: "25 Shields\n-40% Negative Effect Duration",
                details: "When affected by Stun, Sleep, or Hinder, restore 10% of your max Life over 3s.",
                icon: "",
            }, {
                name: "Ironclad Exhaust Ports",
                price: 4000,
                description: "5% Cooldown Reduction",
                details: "When you use an ability, gain 25 Overhealth for 3s.",
                icon: "",
            }, {
                name: "Vishkar Condensor",
                price: 4000,
                description: "25 Shields",
                details: "Convert 100 Health into Shields.",
                icon: "",
            }, {
                name: "Vital-e-tee",
                price: 4000,
                description: "10 Armor",
                details: "Convert 100 Health into Armor.",
                icon: "",
            }, {
                name: "Crusader Hydraulics",
                price: 4500,
                description: "25 Armor",
                details: "While you have Armor, take 10% reduced Weapon Damage.",
                icon: "",
            }, {
                name: "Iron Eyes",
                price: 4500,
                description: "25 Shields",
                details: "You take 20% reduced damage from Critical Hits.",
                icon: "",
            }, {
                name: "Meka-Z Series",
                price: 5000,
                description: "8% Health, Armor, Shields",
                details: "",
                icon: "",
            },],
            "epic": [{
                name: "Geneticist's Vial",
                price: 9000,
                description: "25 Health",
                details: "The first time you would die each round, revive instead with 250 Life after 3s.",
                icon: "",
            }, {
                name: "Bloodbound",
                price: 9000,
                description: "50 Health",
                details: "The last enemy to deal a final blow to you is Revealed when nearby. Deal 10% more damage to them and take 10% reduced damage from them.",
                icon: "",
            }, {
                name: "Divine Intervention",
                price: 9500,
                description: "50 Shields",
                details: "When you take more than 100 damage at once, restore 15 percent of damage taken and start regenerating your shields.",
                icon: "",
            }, {
                name: "Gloomgauntlet",
                price: 10000,
                description: "50 Armor\n15% Melee Damage",
                details: "[Melee] damage grants 10% Move Speed and restores 5% of Max Life over 2s.",
                icon: "",
            }, {
                name: "Martian Mender",
                price: 9500,
                description: " 25 Health\n10% Cooldown Reduction",
                details: "Restore 3% of your Life every 1s.",
                icon: "",
            }, {
                name: "Phantasmic Flux",
                price: 10000,
                description: "10% Weapon Power\n10% Ability Power\n15% Weapon Lifesteal\n15% Ability Lifesteal",
                details: "While at full Life, Lifesteal grants up to 100 Overhealth.",
                icon: "",
            }, {
                name: "Rüstung von Wilhelm",
                price: 10000,
                description: "15% Health, Armor, Shields",
                details: "While below 30% Life, gain 10% Damage Reduction.",
                icon: "",
            }, {
                name: "Vanadium Injection",
                price: 10000,
                description: "50 Shields",
                details: "While at 100% Ultimate Charge, gain:\n50 Health\n10% Weapon Power\n10% Ability Power\n10% Attack Speed\n10% Cooldown Reduction\n10% Move Speed",
                icon: "",
            }, {
                name: "Nebula Conduit",
                price: 11000,
                details: "Prevent 15% of incoming damage and instead take that prevented damage over 3s.",
                description: "50 Health\n5% Weapon Power",
                icon: "",
            }, {
                name: "Ogundimu Reduction Field",
                price: 11000,
                description: "50 Armor",
                details: "When you take damage, gain 0.5% damage reduction for 1s, stacking up to 20 times.",
                icon: "",
            },]
        }
    }
];