/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Scale } from "@fern-api/scale";

export interface Project {
    type?: string;
    name?: string;
    paramHistory?: Scale.ProjectPramHistory[];
    createdAt?: string;
}
