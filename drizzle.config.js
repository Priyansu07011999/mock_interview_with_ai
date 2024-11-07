/** @type{import("drizzle-kit").Config} */
export default{
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials:{
        url: "postgresql://mock-interview-with-ai_owner:ECFXWHL8Ntx5@ep-yellow-resonance-a576gkwr.us-east-2.aws.neon.tech/mock-interview-with-ai?sslmode=require"
    }
}