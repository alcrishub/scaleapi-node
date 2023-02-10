/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { ScaleApi } from "@fern-api/scale";

export interface CreateProjectRequest {
    type: ScaleApi.TaskType;
    name: string;
    rapid?: boolean;
    params?: Record<string, unknown>;
}
