import Knex from "knex";
import config from "../knexfile";

const environment = process.env.ENVIRONMENT || "development";

export const knex = Knex(config[environment]);