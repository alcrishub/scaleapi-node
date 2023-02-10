/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { ScaleApi } from "@fern-api/scale";

export interface VideoPlaybackParams {
    attachment?: string;
    frameRate?: number;
    withLabels?: boolean;
    eventsToAnnotate?: unknown[];
    geometries?: ScaleApi.VideoPlaybackGeometries;
    isTest?: boolean;
    /** A set of key/value pairs that you can attach to a task object. It can be useful for storing additional information about the task in a structured format. Max 10KB. */
    metadata?: string;
}
