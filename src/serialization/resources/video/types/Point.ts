/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Scale } from "@fern-api/scale";
import * as core from "../../../../core";

export const Point: core.serialization.ObjectSchema<serializers.Point.Raw, Scale.Point> = core.serialization.object({
    objectsToAnnotate: core.serialization.property(
        "objects_to_annotate",
        core.serialization.list(core.serialization.unknown()).optional()
    ),
    x: core.serialization.number().optional(),
    y: core.serialization.number().optional(),
});

export declare namespace Point {
    interface Raw {
        objects_to_annotate?: unknown[] | null;
        x?: number | null;
        y?: number | null;
    }
}
