/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { ScaleApi } from "@fern-api/scale";

export interface Project {
    type?: string;
    name?: string;
    paramHistory?: ScaleApi.ProjectPramHistory[];
    createdAt?: string;
}
