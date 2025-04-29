import { init, i, id, InstaQLEntity } from "@instantdb/core";

// ID for app: RecipeApp
const APP_ID = "8a5bb85d-2276-4c72-98be-fe3c63702da0";

// Optional: Declare your schema!
const schema = i.schema({
    entities: {
        recipes: i.entity({
            id: i.string(),
            name: i.string(),
            image: i.string(),
            difficulty: i.string(),
            prepTimeMinutes: i.number(),
        }),
    },
});

const db = init({ appId: APP_ID, schema });

export { db, schema };