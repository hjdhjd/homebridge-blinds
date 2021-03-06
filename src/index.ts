/* Copyright(C) 2017-2020, HJD (https://github.com/hjdhjd). All rights reserved.
 *
 * index.ts: homebridge-blinds-cmd plugin registration.
 */
import { PLATFORM_NAME, PLUGIN_NAME } from "./settings";
import { API } from "homebridge";
import { BlindsCmdPlatform } from "./blindsCmd-platform";

// Register our platform with homebridge.
export = (api: API): void => {
  api.registerPlatform(PLUGIN_NAME, PLATFORM_NAME, BlindsCmdPlatform);
}
