export const games = [
    {
        id: "prasino",
        image: "/assets/images/games/prasino.png",
        title: "Prásino",
        description: "You are the LAST HOPE in a TRASH-CURSED WORLD. Fight through waves of garbage enemies in this action-packed survival game.",
        year: 2024,
        tags: ["action", "survival", "wave-based"],
        platforms: {
            web: "https://miusoft.itch.io/prasino",
        },
    },
    {
        id: "ghost-maker",
        image: "/assets/images/games/GhostMaker.png",
        title: "Ghost Maker",
        description: "Merge spooky items to create your ghost! A relaxing merge puzzle game with a Halloween twist.",
        year: 2023,
        tags: ["puzzle", "merge", "casual"],
        platforms: {
            web: "https://miusoft.itch.io/ghost-maker",
        },
    },
    {
        id: "sky-rings",
        image: "/assets/images/games/skyrings.png",
        title: "Sky Rings",
        description: "Race the Sky, Chase the Rings. A fast-paced aerial racing game where precision is everything.",
        year: 2023,
        tags: ["racing", "arcade", "casual"],
        platforms: {
            web: "https://miusoft.itch.io/sky-rings",
        },
    },
    {
        id: "chakra",
        image: "/assets/images/games/chakra.png",
        title: "Chakra",
        description: "Break the Cycle. A minimalist action game about rhythm, focus, and breaking patterns.",
        year: 2023,
        tags: ["action", "minimalist", "arcade"],
        platforms: {
            web: "https://miusoft.itch.io/chakra",
        },
    },
    {
        id: "thundercuffed",
        image: "/assets/images/games/thundercuffed.png",
        title: "THUNDERCUFFED",
        description: "Overpowered and under control? Not really. Harness wild electric powers in this chaotic action game.",
        year: 2024,
        tags: ["action", "arcade", "chaotic"],
        platforms: {
            web: "https://miusoft.itch.io/thundercuffed",
        },
    },
    {
        id: "yellow-bird",
        image: "/assets/images/games/yellowbird.png",
        title: "Yellow Bird",
        description: "Let Your Yellow Bird Fly Free. A casual endless flyer about freedom and simple joy.",
        year: 2022,
        tags: ["casual", "endless", "mobile"],
        platforms: {
            android: "https://play.google.com/store/apps/details?id=com.miusoftgames.freebird",
        },
    },
    {
        id: "aim-360",
        image: "/assets/images/games/aim360.png",
        title: "Aim 360°",
        description: "Your Aim is Survival in a 360° Battlefield. Enemies come from all directions — stay sharp.",
        year: 2023,
        tags: ["action", "survival", "shooter"],
        platforms: {
            web: "https://miusoft.itch.io/aim-360",
        },
    },
    {
        id: "cold-survival",
        image: "/assets/images/games/coldsurvival.png",
        title: "Cold Survival",
        description: "Stay cool, dodge the heat, and survive the frost! A tricky survival game with icy mechanics.",
        year: 2023,
        tags: ["survival", "casual", "dodge"],
        platforms: {
            web: "https://miusoft.itch.io/cold-survival",
        },
    },
    {
        id: "virtual-vesak",
        image: "/assets/images/games/virtualvesak.png",
        title: "Virtual Vesak",
        description: "A serene 3D walking simulator inspired by the Vesak festival. Explore, reflect, and enjoy the atmosphere.",
        year: 2023,
        tags: ["walking-sim", "3d", "relaxing"],
        platforms: {
            web: "https://miusoft.itch.io/virtual-vesak-v2",
        },
    },
    {
        id: "frut-split",
        image: "/assets/images/games/frutsplit.png",
        title: "Frut Split Adventure",
        description: "A satisfying fruit cutting game with colorful slicing action and endless fun.",
        year: 2022,
        tags: ["casual", "arcade", "mobile"],
        platforms: {
            android: "https://play.google.com/store/apps/details?id=com.miusoft.fruit_split_adventure",
        },
    },
];

export const allTags = [...new Set(games.flatMap((g) => g.tags))].sort();